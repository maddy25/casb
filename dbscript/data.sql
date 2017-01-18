/*******************************************************************************
   Sample Data Insertion
********************************************************************************/
/*
truncate table user,
truncate table supported_platform,
truncate table supported_service,
truncate table service_category,
*/

/* supported platform */
INSERT INTO `cas`.`supported_platform` (`id`, `name`) VALUES
(100 , "Google Suite"),
(101 , "Dropbox"),
(102 , "Office 365");


/* supported_service*/
INSERT INTO `cas`.`supported_service` (`id`, `name`, `description`, `supported_platform_id` ) VALUES
(150 , "G Mail"       , "G Mail"       , 100),
(151 , "Google Drive" , "Google Drive" , 100),
(152 , "Dropbox"      , "Dropbox"      , 101),
(153 , "Outlook"      , "Outlook"      , 102),
(154 , "One Drive"    , "One Drive"    , 102);

/* Service Category */
INSERT INTO `cas`.`service_category` (`id`, `name`) VALUES
(200 , "Identity"),
(201 , "Email"   ),
(202 , "Drive"   ),
(203 , "Network" ),
(204 , "Endpoint");

/* Field Name */
INSERT INTO `field` (`id`,`name`, `service_category_id`) VALUES
(300 , "Email Subject"    , 201),
(301 , "From Address"     , 201),
(302 , "To Address"       , 201),
(303 , "Email Body"       , 201),
(304 , "Header"           , 201),
(305 , "Attachment"       , 201),
(306 , "Attachment Count" , 201),
(307 , "Attachment Size"  , 201),
(308 , "Attachment Name"  , 201),
(309 , "Attachment Type"  , 201),
(310 , "File Name"        , 202),
(311 , "File Origin"      , 202),
(312 , "File Size"        , 202),
(313 , "File Type"        , 202),
(314 , "File Content"     , 202),
(315 , "User Name"        , 202),
(316 , "IP Address"       , 203),
(317 , "IP Address"       , 203),
(318 , "IP Address"       , 204),
(319 , "IP Address"       , 204);

/* Operator */
INSERT INTO `cas`.`operator`(`id`,`name`, `argument_count`) VALUES
(400 , "is"           ,1),
(401 , "contains"     ,1),
(402 , "regex"        ,1),
(403 , "starts with"  ,1),
(404 , "is not"       ,1),
(405 , "is empty"     ,0),
(406 , "is_not_empty" ,0),
(407 , "is more than" ,1),
(408 , "is less than" ,1),
(409 , "is between"   ,2);

/* Action */
INSERT INTO `cas`.`action` (`id`, `name`, `type`) VALUES
(500 , "Enable MFA"  , " "),
(501 , "Alert"       , " "),
(502 , "Email Admin" , " "),
(503 , "Delete"      , " "),
(504 , "Tokenize"    , " "),
(505 , "Block share" , " "),
(506 , "Blacklist IP", " "),
(507 , "Sandbox"     , " "),
(508 , "Quarantine"  , " "),
(509 , "Encrypt"     , " "),
(510 , "Quarantine Attachments (if any)", " "),
(511 , "Sandbox Attachments (if any)"   , " ");

/* Rule Enforcement Point */
INSERT INTO `cas`.`rule_enforcement_point` (`id`, `name`, `service_category_id`) VALUES
(700  , "Request" , 200),
(701  , "Incoming", 201),
(702  , "Outgoing", 201),
(703  , "Download", 202),
(704  , "Upload"  , 202),
(705  , "At Rest" , 202);

/* Defines set of actions available for each enforcement points */
INSERT INTO `cas`.`rule_enforcement_point_action_association` (`rule_enforcement_point_id`, `action_id`) VALUES
(700, 500 ),
(701, 501 ),
(701, 502 ),
(701, 511 ),
(701, 510 ),
(701, 506 ),
(702, 501 ),
(702, 502 ),
(703, 501 ),
(703, 502 ),
(703, 507 ),
(703, 508 ),
(703, 506 ),
(703, 503 ),
(704, 501 ),
(704, 502 ),
(704, 508 ),
(704, 509 ),
(704, 504 ),
(704, 505 ),
(704, 503 ),
(705, 501 ),
(705, 502 ),
(705, 508 ),
(705, 509 ),
(705, 504 ),
(705, 505 ),
(705, 503 );



/* User */
insert into user (user_id, password, first_name, last_name, email, company, phone, address1, address2, country, postal, role, is_active, is_blocked, security_provider_id, default_customer_id, secret_question, secret_answer, enable_beta_testing, enable_renewal) values
('user'      , 'user'     , 'Virginia' , 'Reynolds', 'vreynolds0@slashdot.org', 'Rippin, Osinski and Beatty', '84-(228)809-9998', '0118 Burrows Plaza', '496'     , 'USA'        , '94086', 'USER' , 1, 1, 10001, 20000, 'Innovative'    , 'Turquoise', 1, 1),
('admin'     , 'admin'    , 'Theresa'  , 'Russell' , 'trussell1@about.me'     , 'Glover, Adams and Bins', '383-(779)851-3208', '30874 Graceland Terrace', '99152' , 'USA'        , '51065', 'ADMIN', 1, 0, 10001, 20000, 'knowledge base', 'Mauv'   , 1, 0),
('demo'      , 'demo'     , 'Arthur'   , 'Rivera'  , 'arivera2@joomla.org'    , 'Abshire Inc', '7-(740)701-4547', '80429 Garrison Crossing', '4967'               , 'USA'        , '64890', 'USER' , 0, 0, 10001, 20000, 'Diverse'       , 'Yellow' , 0, 0),
('jowens3'   , 'jowens3'  , 'Judy'     , 'Owens'   , 'jowens3@hp.com'         , 'Altenwerth, Fisher and Heidenreich', '30-(772)268-8227', '98 Loeprich Way', '447', 'Greece'     , null   , 'USER' , 0, 0, 10001, 20001, 'capacity'      , 'Fuscia' , 1, 1),
('kburns4'   , 'kburns4'  , 'Kelly'    , 'Burns'   , 'kburns4@icio.us'        , 'McCullough-Morar', '86-(857)185-5740', '1638 Basil Alley', '56297'               , 'China'      , null   , 'ADMIN', 1, 0, 10000, 20002, 'user-facing'   , 'Crimson', 1, 1),
('jshaw5'    , 'jshaw5'   , 'Julie'    , 'Shaw'    , 'jshaw5@opera.com'       , 'Steuber-Okuneva', '1-(871)375-6188', '389 Myrtle Pass', '41444'                  , 'Canada'     , null   , 'ADMIN', 1, 1, 10000, 20000, 'software'      , 'Green'  , 0, 1),
('pgilbert6' , 'pgilbert6', 'Peter'    , 'Gilbert' , 'pgilbert6@eepurl.com'   , 'Robel Inc', '52-(372)555-4687', '11522 Fuller Avenue', '5'                       , 'Mexico'     , '39230', 'ADMIN', 1, 1, 10000, 20000, 'multi-state'   , 'Puce'   , 1, 1),
('jjacobs7'  , 'jjacobs7' , 'Justin'   , 'Jacobs'  , 'jjacobs7@google.co.uk'  , 'Harris-Bashirian', '963-(199)359-2552', '95012 Hanover Street', '2377'           , 'Syria'      , null   , 'USER' , 1, 0, 10000, 20002, 'motivating'    , 'Crimson', 1, 0),
('kbennett8' , 'kbennett8', 'Kevin'    , 'Bennett' , 'kbennett8@hostgator.com', 'Leannon Inc', '62-(892)710-5713', '459 Coleman Drive', '397'                     , 'Indonesia'  , null   , 'ADMIN', 0, 0, 10001, 20000, 'Exclusive'     , 'Purple' , 1, 1),
('cmurphy9'  , 'cmurphy9' , 'Chris'    , 'Murphy'  , 'cmurphy9@over-blog.com' , 'Mosciski LLC', '64-(272)961-0086', '2 Ludington Point', '7'                      , 'New Zealand', null   , 'ADMIN', 0, 1, 10000, 20000, 'empowering'    , 'Maroon' , 0, 1);

/* Security Providers */
INSERT INTO `cas`.`security_provider` (`id`, `name`,`description`) VALUES
(10000 , "SonicWALL" , "SonicWALL"),
(10001 , "Security Incorporation" , "Security Incorporation");

/* Customers */
INSERT INTO `cas`.`customer` (`id`, `name`,`description`,`customer_code`,`security_provider_id`) VALUES
(20000  , "Walmart" , "Walmart", "wlm" ,10000),
(20001  , "Safeway" , "Safeway", "sfw" ,10001),
(20002  , "Target"  , "Target" , "tgt" ,10000);

/* Managed Platforms */
INSERT INTO `cas`.`managed_platform` (`id`, `supported_platform_id`, `customer_id`) VALUES
(30000  , 100  , 20000 ),
(30001  , 101  , 20000 ),
(30002  , 102  , 20002 ),
(30003  , 101  , 20002 ),
(30004  , 100  , 20001 ),
(30005  , 102  , 20001 );

/* Managed Services */
INSERT INTO `cas`.`managed_service` (`id`, `managed_platform_id`, `supported_service_id`) VALUES
(40000  ,  30000 , 150 ),
(40001  ,  30000 , 151 ),
(40002  ,  30001 , 152 ),
(40003  ,  30002 , 153 ),
(40004  ,  30002 , 154 ),
(40005  ,  30003 , 152 ),
(40006  ,  30004 , 150 ),
(40007  ,  30005 , 153 );

/* Policy Types*/
INSERT INTO `cas`.`policy_type` (`id`, `name`) VALUES
(200000  , "PCI Compliance"       ),
(200001  , "PHI Compliance"       ),
(200002  , "Payment cards information"       ),
(200003  , "Personal identifier information" ),
(200004  , "Sesitive information"            ),
(200005  , "Questionable user activity"      ),
(200006  , "Virus or mallware"               ),
(200007  , "Blacklisted IP"                  ),
(200008  , "Blacklisted Email Address"       ),
(200009  , "Likely Spam Email"               ),
(200010  , "Restricted file type"            ),
(200012  , "other"                           );

/* Policy */
INSERT INTO `cas`.`policy` (`id`, `name`,`description`,`state`, `severity`,`policy_type_id`, `customer_id`, `created`, `updated`,`created_by`,`updated_by`) VALUES
(100000 ,  "PCI Compliance"                  , "PCI Compliance"                  , "ACTIVE",  "INFO"    ,200000  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100001 ,  "PHI Compliance"                  , "PHI Compliance"                  , "ACTIVE",  "INFO"    ,200001  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100002 ,  "Credit Card Number"              , "Credit Card Number"              , "ACTIVE",  "CRITICAL",200002  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100003 ,  "Payment cards information"       , "Payment cards information"       , "ACTIVE",  "WARNING" ,200002  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100004 ,  "Personal identifier information" , "Personal identifier information" , "ACTIVE",  "CRITICAL",200003  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100005 ,  "Virus"                           , "Virus"                           , "ACTIVE",  "WARNING" ,200006  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100006 ,  "Blacklist IP"                    , "Blacklist IP"                    , "ACTIVE",  "ALERT"   ,200007  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100007 ,  "Blocked Email"                   , "Blocked Email"                   , "ACTIVE",  "WARNING" ,200008  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100008 ,  "Spam Email"                      , "Spam Email"                      , "ACTIVE",  "ALERT"   ,200009  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100009 ,  "Company information"             , "Company information"             , "ACTIVE",  "CRITICAL",200012  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100010 ,  "PCI Compliance"                  , "PCI Compliance"                  , "ACTIVE",  "INFO"    ,200000  , 20002 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100011 ,  "PCI Compliance"                  , "PCI Compliance"                  , "ACTIVE",  "INFO"    ,200000  , 20001 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(100012 ,  "Restricted File Type"            , "Restricted File Type"            , "ACTIVE",  "ALERT"   ,200010  , 20000 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" );


/* Rules for each Policy */
INSERT INTO `cas`.`rule` (`id`, `name`, `description`, `policy_id`,`managed_service_id`,`rule_enforcement_point_id`,`created`,`updated`,`created_by`,`updated_by`) VALUES
(3000000  ,  "Walmart PCI Rule"      , "Walmart PCI Rule"     ,   100000  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000002  ,  "Walmart PHI Rule"      , "Walmart PHI Rule"     ,   100001  , 40001 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000003  ,  "Walmart File Block"    , "Walmart File Block"   ,   100012  , 40002 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000004  ,  "Credit Card Rule"      , "Credit Card Rule"     ,   100002  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000005  ,  "Card Information Rule" , "Card Information Rule",   100003  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000006  ,  "Personal Info Rule"    , "Personal Info Rule"   ,   100004  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000007  ,  "Virus detector"        , "Virus detector"       ,   100005  , 40001 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000008  ,  "Blocked IP"            , "Blocked IP"           ,   100006  , 40001 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000009  ,  "Blacklisted Email"     , "Blacklisted Email"    ,   100007  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000010  ,  "Spam Email"            , "Spam Email"           ,   100008  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000012  ,  "Target PCI Rule"       , "Target PCI Rule"      ,   100010  , 40003 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000013  ,  "Company Information"   , "Company Information"  ,   100009  , 40003 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000014  ,  "Safeway PCI Rule"      , "Safeway PCI Rule"     ,   100011  , 40007 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" );

/*
(3000001  ,  "Walmart PCI Rule 2"    , "Walmart PCI Rule 2"   ,   100000  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000011  ,  "Questionable File"     , "Questionable File"    ,   100008  , 40001 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
*/

/* Conditions for each Rule */
INSERT INTO `cas`.`rule_condition` (`id`, `description`, `field_id`,`operator_id`,`value1`,`value2`,`rule_id`) VALUES
(4000001, "Mail from Junk.com"         ,301 , 400 , "email1@junk.com", "", 3000009),
(4000002, "Email contains SSN"         ,303 , 401 , "ssn"            , "", 3000006),
(4000003, "Email with Credit Card Info",303 , 401 , "Cerdit Card"    , "", 3000006),
(4000004, "Virus.exe file detected"    ,310 , 400 , "virus.exe"      , "", 3000007),
(4000005, "Detected .exe file"         ,313 , 400 , "exe"            , "", 3000007),
(4000006, "Mail from ads.com"          ,301 , 400 , "email1@ads.com" , "", 3000009),
(4000007, "Mail from free.com"         ,301 , 400 , "email1@free.com", "", 3000009),
(4000008, "Mail from sale.com"         ,301 , 400 , "email1@sale.com", "", 3000009),
(4000009, "Mail from deal.com"         ,301 , 400 , "email1@deal.com", "", 3000009),
(4000010, "Detected Restricted IP"     ,316 , 400 , "10.10.10.10"    , "", 3000008);
