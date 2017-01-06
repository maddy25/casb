/*******************************************************************************
   CASB Database - Version 1.alpha
   Script: casb.sql
   Description: Creates and populates the CASB database.
   DB Server: MySql
   Author: Mrinmoy Majumdar
   License: SonicWALL
********************************************************************************/

/*
Conventions
- Names are small case and words are seperated by _
- all tables names must be singular (eg: service instead of services)

- Standard Field Sizes
  - 'id' fields are nvarchar(20)
  - 'name' fields are nvarchar(50)
  - 'description' fields are nvarchar(150)

*/

/*******************************************************************************
   Drop database if it exists
********************************************************************************/
DROP DATABASE IF EXISTS `casb`;


/*******************************************************************************
   Create database
********************************************************************************/
CREATE DATABASE `casb`;
USE `casb`;


/*******************************************************************************
   Create Tables
********************************************************************************/

/******** START  ::  MASTER DATA ********/
/*
    1. List of Platform and Services
      - Platform table contains the list of supported platforms
      - Each platform supports a list for services - service table

    2. List of Field Names
    3. List of Operators
    4. List of Rule Category
    5. List of Enforcement Point
    6. List of Actions
    7. List of Enforcement Point Actions
    8. List of users

*/
CREATE TABLE platform (
    platform_id  NVARCHAR(20) NOT NULL,
    name         NVARCHAR(50) NOT NULL,
    CONSTRAINT pk_platform_id PRIMARY KEY(platform_id)
);

CREATE TABLE platform_service (
    service_id  NVARCHAR(20) NOT NULL,
    platform_id NVARCHAR(20) ,
    name        NVARCHAR(50) NOT NULL,
    description NVARCHAR(150),
    CONSTRAINT pk_service_id PRIMARY KEY(service_id)
);

CREATE TABLE field_name (
    field_id  NVARCHAR(20) NOT NULL,
    name      NVARCHAR(50) NOT NULL,
    CONSTRAINT pk_field_id PRIMARY KEY(field_id)
);

CREATE TABLE operator (
    operator_id NVARCHAR(20) NOT NULL,
    name        NVARCHAR(50) NOT NULL,
    CONSTRAINT pk_operator_id PRIMARY KEY(operator_id)
);

CREATE TABLE rule_category (
    rule_category_id NVARCHAR(20) NOT NULL,
    name             NVARCHAR(50) NOT NULL,
    CONSTRAINT pk_rule_category_id PRIMARY KEY(rule_category_id)
);

CREATE TABLE enforcement_point (
    enforcement_point_id NVARCHAR(20) NOT NULL,
    name             NVARCHAR(50) NOT NULL,
    CONSTRAINT pk_enforcement_point_id PRIMARY KEY(enforcement_point_id)
);

CREATE TABLE action (
    action_id   NVARCHAR(20) NOT NULL,
    name        NVARCHAR(50) NOT NULL,
    type        NVARCHAR(50) ,
    CONSTRAINT pk_action_id PRIMARY KEY(action_id)
);

/* This has no primary key, it contains enforcement_point_name which is a group of enforcement_point and actions */
CREATE TABLE enforcement_point_action (
    enforcement_point_name   NVARCHAR(50),
    enforcement_point_id     NVARCHAR(20),
    action_id                NVARCHAR(20),
    rule_category_id NVARCHAR(20),
);



CREATE TABLE user (
    user_id     NVARCHAR(20) NOT NULL,
    password    NVARCHAR(20) NOT NULL,
    name        NVARCHAR(50) NOT NULL,
    role        NVARCHAR(50) ,
    is_active   NVARCHAR(1)  ,
    is_blocked  NVARCHAR(1)  ,
    CONSTRAINT user_id PRIMARY KEY(user_id)
);

/******** END :: MASTER DATA ********/


/******** START :: Provider, Entity, Platforms and Services ********/
/*
    Each security_provider have multiple managed_entity
    Each managed_entity can have multiple managed_platform
    Each managed_platform can have multiple managed_services
*/

CREATE TABLE security_provider (
    provider_id NVARCHAR(20) NOT NULL,
    name        NVARCHAR(50) NOT NULL,
    description NVARCHAR(150),
    CONSTRAINT pk_security_provider PRIMARY KEY(provider_id)
);

CREATE TABLE managed_entity (
    provider_id NVARCHAR(150), /* fk */
    entity_id   NVARCHAR(20) NOT NULL,
    name        NVARCHAR(50) NOT NULL,
    description NVARCHAR(150),
    CONSTRAINT pk_managed_entity PRIMARY KEY(entity_id)
);

CREATE TABLE managed_platform (
    entity_id   NVARCHAR(20) , /* fk */
    managed_platform_id NVARCHAR(20) NOT NULL,
    name        NVARCHAR(50) NOT NULL,
    description NVARCHAR(150),
    domain      NVARCHAR(50),
    client_id   NVARCHAR(50),
    client_key  NVARCHAR(50),
    CONSTRAINT  pk_managed_platform_id PRIMARY KEY(managed_platform_id)
);

CREATE TABLE managed_service (
    managed_platform_id  NVARCHAR(20), /* fk */
    managed_service_id   NVARCHAR(20) NOT NULL,
    subscription_id      NVARCHAR(20)
    CONSTRAINT pk_managed_service_id PRIMARY KEY(managed_service_id)
);
/******** END :: Provider, Entity, Platforms and Services ********/



/******** START :: Policy, Rules, Actions and Services ********/
/*
    rule_enforcement_point: Each Rule Enforcement Point is a set of multiple
    rule : Each rule have
        multiple enforcementpoint_action ( set of all actions are determined )
        multiple conditions



    Each Policy can have multiple rules
    Each Rule can have multiple conditions
    Each Rule can have multiple actions
*/
CREATE TABLE policy (
    policy_id     NVARCHAR(20) NOT NULL,
    name          NVARCHAR(50) NOT NULL,
    description   NVARCHAR(150),
    state         NVARCHAR(20),  /* active, inactive */
    creation_date DATETIME,
    created_by_id NVARCHAR(20),
    type          NVARCHAR(20),  /* system, user  */
    severity      NVARCHAR(20),  /* alert, info, warning, critical */
    CONSTRAINT  pk_policy_id PRIMARY KEY(policy_id)
);


CREATE TABLE rule (
    rule_id                NVARCHAR(20) NOT NULL,
    name                   NVARCHAR(50) NOT NULL,
    description            NVARCHAR(150),
    rule_enforcement_point NVARCHAR(50),  /* Possible list of values */
    rule_category_id       NVARCHAR(20),  /* fk */
    policy_id              NVARCHAR(20),  /* fk */
    creation_date          DATETIME,
    created_by_id          NVARCHAR(20),
    CONSTRAINT  pk_rule_id PRIMARY KEY(rule_id)
);

CREATE TABLE rule_condition (
    rule_id          NVARCHAR(20) , /* fk */
    condition_id     NVARCHAR(20) NOT NULL,
    description      NVARCHAR(150),
    field_id         NVARCHAR(20) , /* fk */
    operator_id      NVARCHAR(20) , /* fk */
    value            NVARCHAR(150),
    and_or           NVARCHAR(10),  /* and , or */
    CONSTRAINT  condition_id PRIMARY KEY(condition_id)
);

CREATE TABLE rule_action (
    rule_id          NVARCHAR(20) , /* fk */
    action_id        NVARCHAR(20) , /* fk */
    creation_date    DATETIME,
    created_by_id    NVARCHAR(20),
    CONSTRAINT  rule_condition_id PRIMARY KEY(rule_condition_id)
);
/******** END :: Policy, Rules, Actions and Services ********/


/*******************************************************************************
   Create Foreign Keys
********************************************************************************/
ALTER TABLE platform_service ADD CONSTRAINT fk_platform_id         FOREIGN KEY (platform_id)         REFERENCES platform(platform_id);
ALTER TABLE managed_entity   ADD CONSTRAINT fk_provider_id         FOREIGN KEY (provider_id)         REFERENCES security_provider(provider_id);
ALTER TABLE managed_platform ADD CONSTRAINT fk_entity_id           FOREIGN KEY (entity_id)           REFERENCES managed_entity(entity_id);
ALTER TABLE managed_service  ADD CONSTRAINT fk_managed_platform_id FOREIGN KEY (managed_platform_id) REFERENCES managed_service(managed_platform_id);

ALTER TABLE rule  ADD CONSTRAINT fk_rule_category_id FOREIGN KEY (rule_category_id) REFERENCES rule_category(rule_category_id);
ALTER TABLE rule  ADD CONSTRAINT fk_policy_id FOREIGN KEY (policy_id) REFERENCES policy(policy_id);

ALTER TABLE rule_condition  ADD CONSTRAINT fk_rule_id FOREIGN KEY (rule_id) REFERENCES rule(rule_id);
ALTER TABLE rule_condition  ADD CONSTRAINT fk_field_id FOREIGN KEY (field_id) REFERENCES field_name(field_id);
ALTER TABLE rule_condition  ADD CONSTRAINT fk_operator_id FOREIGN KEY (operator_id) REFERENCES operator(operator_id);


/*******************************************************************************
   Sample Data Insertion
********************************************************************************/
/* User */
INSERT INTO `user` (`user_id`,`password`,`name`,`role`,`is_active`,`is_blocked`) VALUES
('admin' , 'admin', "Herrod Walls"     ,"admin" ,"y" ,"y"),
('demo'  , 'demo' , "Dieter Dillard"   ,"admin" ,"y" ,"y"),
('user'  , 'demo' , "Victor Johns"     ,"user"  ,"y" ,"y"),
('user1' , 'user1', "Malcolm Simpson"  ,"user"  ,"y" ,"y"),
('user2' , 'user2', "Griffin Cortez"   ,"user"  ,"y" ,"y"),
('user3' , 'user3', "Stuart Jordan"    ,"user"  ,"y" ,"y"),
('user4' , 'user4', "Harrison Waters"  ,"user"  ,"y" ,"y"),
('user5' , 'user5', "Jasper Adkins"    ,"user"  ,"y" ,"y");

/* platform */
INSERT INTO `casb`.`platform` (`platform_id`, `name`) VALUES
('google_drive', "Google Drive"),
('office_365'  , "Office 365");

/* platform_service*/
INSERT INTO `casb`.`platform_service` (`service_id`, `platform_id`, `name`, `description`) VALUES
('all_domain'       , 'Google Drive', "All Domain"        , "Monitor all Domain"),
('selected_org_unit', 'Google Drive', "Selected Org Unit" , "Monitor selected organizational units only"),
('selected_groups'  , 'Google Drive', "Selected Groups"   , "Monitor selected groups only"),
('all_domain'       , 'Office 365'  , "All Domain"        , "Monitor all Domain"),
('selected_groups'  , 'Office 365'  , "Selected Groups"   , "Monitor selected groups only");


/* Rule Category */
INSERT INTO `casb`.`rule_category` (`rule_category_id`, `name`) VALUES
('identity', "Identity"),
('email'   , "Email"   ),
('drive'   , "Drive"   ),
('network' , "Network" ),
('endpoint', "Endpoint");

/*Enforcement Point */
INSERT INTO `casb`.`enforcement_point` (`enforcement_point_id`, `name`) VALUES
('request'   , "Request" ),
('incoming ' , "Incoming"),
('outgoing'  , "Outgoing"),
('download'  , "Download"),
('upload'    , "Upload"  ),
('at_rest'   , "At Rest" );

/* Action */
INSERT INTO `casb`.`action` (`action_id`, `name`, `type`) VALUES
('enable_mfa'    , "Enable MFA"  , " "),
('alert'         , "Alert"       , " "),
('email_admin'   , "Email Admin" , " "),
('delete'        , "Delete"      , " "),
('tokenize'      , "Tokenize"    , " "),
('block_share'   , "Block share" , " "),
('blacklist_ip'  , "Blacklist IP", " "),
('sandbox'       , "Sandbox"     , " "),
('quarantine'    , "Quarantine"  , " "),
('encrypt'       , "Encrypt"     , " "),
('quarantine_attachments' ,"Quarantine Attachments (if any)", " "),
('sandbox_attachments'    ,"Sandbox Attachments (if any)"   , " ");

/*Enforcement Point Action*/
INSERT INTO `casb`.`enforcement_point_action` (`enforcement_point_action_name`, `enforcement_point_id`,`rule_category_id`, `action_id` ) VALUES
('identity_request', "request" , "identity", "enable_mfa"         ),
('incoming_email'  , "incoming", "email"   , "alert"              ),
('incoming_email'  , "incoming", "email"   , "email_admin"        ),
('incoming_email'  , "incoming", "email"   , "sandbox_attachments"),
('incoming_email'  , "incoming", "email"   , "quarantine_attachments"),
('incoming_email'  , "incoming", "email"   , "blacklist_ip"       );
INSERT INTO `casb`.`enforcement_point_action` (`enforcement_point_action_name`, `enforcement_point_id`,`rule_category_id`, `action_id` ) VALUES
('outgoing_email'  , "outgoing", "email" , "alert"      ),
('outgoing_email'  , "outgoing", "email" , "email_admin");
INSERT INTO `casb`.`enforcement_point_action` (`enforcement_point_action_name`, `enforcement_point_id`,`rule_category_id`, `action_id` ) VALUES
('download_drive', "download", "drive", "alert"       ),
('download_drive', "download", "drive", "email_admin" ),
('download_drive', "download", "drive", "sandbox"     ),
('download_drive', "download", "drive", "quarantine"  ),
('download_drive', "download", "drive", "blacklist_ip"),
('download_drive', "download", "drive", "delete"      );
INSERT INTO `casb`.`enforcement_point_action` (`enforcement_point_action_name`, `enforcement_point_id`,`rule_category_id`, `action_id` ) VALUES
('upload_drive', "upload", "drive", "alert"        ),
('upload_drive', "upload", "drive", "email_admin"  ),
('upload_drive', "upload", "drive", "quarantine"   ),
('upload_drive', "upload", "drive", "encrypt"      ),
('upload_drive', "upload", "drive", "tokenize"     ),
('upload_drive', "upload", "drive", "block_share"  ),
('upload_drive', "upload", "drive", "delete"       );
INSERT INTO `casb`.`enforcement_point_action` (`enforcement_point_action_name`, `enforcement_point_id`,`rule_category_id`, `action_id` ) VALUES
('at_rest_drive', "at_rest", "drive", "alert"      ),
('at_rest_drive', "at_rest", "drive", "email_admin"),
('at_rest_drive', "at_rest", "drive", "quarantine" ),
('at_rest_drive', "at_rest", "drive", "tokenize"   ),
('at_rest_drive', "at_rest", "drive", "block_share"),
('at_rest_drive', "at_rest", "drive", "delete"     );

/* Field Name */
INSERT INTO `field_name` (`field_id`,`name`) VALUES
('email_subject' , "Email Subject"),
('from_address'  , "From Address" ),
('to_address'    , "To Address"   ),
('header'        , "Header"       ),
('email_body'    , "Email Body"   ),
('ip_Address'    , "IP Address"   ),
('file_type'     , "File Type"    ),
('file_name'     , "File Name"    ),
('file_origin'   , "File Origin"  ),
('file_size'     , "File Size"    ),
('file_content'  , "File Content" );

/* Operator */
INSERT INTO `casb`.`operator`(`operator_id`,`name`) VALUES
('is'           , "is"          ),
('contains'     , "contains"    ),
('regex'        , "regex"       ),
('starts_with'  , "starts with" ),
('is_not'       , "is not"      ),
('is_more_than' , "is more than"),
('is_less_than' , "is less than");

