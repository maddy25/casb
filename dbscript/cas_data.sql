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
('g_suite'     , "Google Suite"),
('dropbox'     , "Dropbox"),
('office_365'  , "Office 365");


/* supported_service*/
INSERT INTO `cas`.`supported_service` (`supported_service_id`, `name`, `description`, `supported_platform_id` ) VALUES
('g_mail'       , "G Mail"       , "G Mail"       , 'g_suite'),
('g_drive'      , "Google Drive" , "Google Drive" , 'g_suite'),
('dropbox'      , "Dropbox"      , "Dropbox"      , 'dropbox'),
('outlook'      , "Outlook"      , "Outlook"      , 'office_365'),
('one_drive'    , "One Drive"    , "One Drive"    , 'office_365');

/* Service Category */
INSERT INTO `cas`.`service_category` (`service_category_id`, `name`) VALUES
('identity', "Identity"),
('email'   , "Email"   ),
('drive'   , "Drive"   ),
('network' , "Network" ),
('endpoint', "Endpoint");

/* Field Name */
INSERT INTO `field` (`field_id`,`name`, `service_category_id`) VALUES
('email_subject' , "Email Subject", "email"),
('from_address'  , "From Address" , "email"),
('to_address'    , "To Address"   , "email"),
('email_body'    , "Email Body"   , "email"),
('header'        , "Header"       , "email"),
('attachment'    , "Attachment"   , "email"),
('attachment_count' , "Attachment Count" , "email"),
('attachment_size'  , "Attachment Size"  , "email"),
('attachment_name'  , "Attachment Name"  , "email"),
('attachment_type'  , "Attachment Type"  , "email"),
('file_name'     , "File Name"    , "drive"),
('file_origin'   , "File Origin"  , "drive"),
('file_size'     , "File Size"    , "drive"),
('file_type'     , "File Type"    , "drive"),
('file_content'  , "File Content" , "drive"),
('user_name'     , "User Name"    , "drive"),
('ip_Address'    , "IP Address"   , "network"),
('port'          , "IP Address"   , "network"),
('ip_Address'    , "IP Address"   , "endpoint"),
('port'          , "IP Address"   , "endpoint");

/* Operator */
INSERT INTO `cas`.`operator`(`operator_id`,`name`, `argument_count`) VALUES
('is'           , "is"           ,1),
('contains'     , "contains"     ,1),
('regex'        , "regex"        ,1),
('starts_with'  , "starts with"  ,1),
('is_not'       , "is not"       ,1),
('is_empty'     , "is empty"     ,0),
('is_not_empty' , "is_not_empty" ,0),
('is_more_than' , "is more than" ,1),
('is_less_than' , "is less than" ,1),
('is_between'   , "is between"   ,2);

/* Action */
INSERT INTO `cas`.`action` (`action_id`, `name`, `type`) VALUES
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
('quarantine_attch' ,"Quarantine Attachments (if any)", " "),
('sandbox_attch'    ,"Sandbox Attachments (if any)"   , " ");

/* Rule Enforcement Point */
INSERT INTO `cas`.`rule_enforcement_point` (`rule_enforcement_point_id`, `name`, `service_category_id`) VALUES
("request"   , "Request" , "Identity"),
("incoming"  , "Incoming", "email"),
("outgoing"  , "Outgoing", "email"),
("download"  , "Download", "drive"),
("upload"    , "Upload"  , "drive"),
("at_rest"   , "At Rest" , "drive");

/* Defines set of actions available for each enforcement points */
INSERT INTO `cas`.`rule_enforcement_point_action_association` (`rule_enforcement_point_id`, `action_id`) VALUES
('request', "enable_mfa"             ),
('incoming', "alert"                 ),
('incoming', "email_admin"           ),
('incoming', "sandbox_attch"   ),
('incoming', "quarantine_attch"),
('incoming', "blacklist_ip"          ),
('outgoing', "alert"       ),
('outgoing', "email_admin" ),
('download', "alert"         ),
('download', "email_admin"   ),
('download', "sandbox"       ),
('download', "quarantine"    ),
('download', "blacklist_ip"  ),
('download', "delete"        ),
('upload', "alert"       ),
('upload', "email_admin" ),
('upload', "quarantine"  ),
('upload', "encrypt"     ),
('upload', "tokenize"    ),
('upload', "block_share" ),
('upload', "delete"      ),
('at_rest', "alert"        ),
('at_rest', "email_admin"  ),
('at_rest', "quarantine"   ),
('at_rest', "encrypt"      ),
('at_rest', "tokenize"     ),
('at_rest', "block_share"  ),
('at_rest', "delete"       );



/* User */
INSERT INTO `user` (`user_id`,`password`,`name`,`role`,`is_active`,`is_blocked`) VALUES
('admin'  , 'admin'  , "Administrator"    ,"admin"  ,"y" ,"y"),
('sysuser', 'sysuser', "System User"      ,"sysuser","y" ,"y"),
('demo'   , 'demo'   , "Demo"             ,"user"   ,"y" ,"y"),
('user'   , 'user'   , "Victor Johns"     ,"user"   ,"y" ,"y"),
('user1'  , 'user1'  , "Malcolm Simpson"  ,"user"   ,"y" ,"y"),
('user2'  , 'user2'  , "Griffin Cortez"   ,"user"   ,"y" ,"y"),
('user3'  , 'user3'  , "Stuart Jordan"    ,"user"   ,"y" ,"y"),
('user4'  , 'user4'  , "Harrison Waters"  ,"user"   ,"y" ,"y"),
('user5'  , 'user5'  , "Jasper Adkins"    ,"user"   ,"y" ,"y");

/* Security Providers */
INSERT INTO `cas`.`security_provider` (`security_provider_id`, `name`,`description`) VALUES
("sonicwall"    , "SonicWALL" , "SonicWALL"),
("security_inc" , "Security Incorporation" , "Security Incorporation");

/* Customers */
INSERT INTO `cas`.`customer` (`customer_id`, `name`,`description`,`customer_code`,`security_provider_id`) VALUES
("safeway"   , "Safeway" , "Safeway", "sfw" ,"security_inc"),
("walmart"   , "Walmart" , "Walmart", "wlm" ,"sonicwall"),
("target"    , "Target"  , "Target" , "tgt" ,"sonicwall");

/* Managed Platforms */
INSERT INTO `cas`.`managed_platform` (`managed_platform_id`, `platform_id`, `customer_id`) VALUES
('walmart_g_suite'   , 'g_suite'    ,  "walmart"  ),
('walmart_dropbox'   , 'dropbox'    ,  "walmart"  ),
('target_office_365' , 'office_365' ,  "target"   ),
('target_dropbox'    , 'dropbox'    ,  "target"   ),
('safeway_g_suite'   , 'g_suite'    ,  "safeway"  ),
('safeway_office_365', 'office_365' ,  "safeway"  );

/* Managed Services */
INSERT INTO `cas`.`managed_service` (`managed_service_id`, `managed_platform_id`, `service_id`) VALUES
('walmart_g_mail'   ,  'walmart_g_suite'    , "g_mail"   ),
('walmart_g_drive'  ,  "walmart_g_suite"    , "g_drive"  ),
('walmart_dropbox'  ,  "walmart_dropbox"    , "dropbox"  ),
('target_outlook'   ,  "target_office_365"  , "outlook"  ),
('target_one_drive' ,  "target_office_365"  , "one_drive"),
('target_dropbox'   ,  "target_dropbox"     , "dropbox"  ),
('safeway_g_mail'   ,  "safeway_g_suite"    , "g_mail"   ),
('safeway_outlook'  ,  "safeway_office_365" , "outlook"  );

/* Policy Types*/
INSERT INTO `cas`.`policy_type` (`policy_type_id`, `name`) VALUES
('pci'            , "PCI Compliance"       ),
('phi'            , "PHI Compliance"       ),
('card_info'      , "Payment cards information"       ),
('personal_info'  , "Personal identifier information" ),
('sensitive_info' , "Sesitive information"            ),
('user_activity'  , "Questionable user activity"      ),
('virus'          , "Virus or mallware"               ),
('blacklist_ip'   , "Blacklisted IP"                  ),
('blacklist_email', "Blacklisted Email Address"       ),
('spam_email'     , "Likely Spam Email"               ),
('restricted_file', "Restricted file type"            ),
('other'          , "other"                           );

/* Policy */
INSERT INTO `cas`.`policy` (`policy_id`, `name`,`description`,`state`,`defined_by`,`severity`,`policy_type_id`,`customer_id`,`last_updated`,`created_by_id`) VALUES
('pci_walmart'   ,  "PCI Compliance"                  , "PCI Compliance"                  , "active", 'system', 'info'    ,"pci"            ,'walmart','2017-01-01' , 'sysuser' ),
('phi_walmart'   ,  "PHI Compliance"                  , "PHI Compliance"                  , "active", 'system', 'info'    ,"phi"            ,'walmart','2017-01-01' , 'sysuser' ),
('cc1_walmart'   ,  "Credit Card Number"              , "Credit Card Number"              , "active", 'system', 'critical',"card_info"      ,'walmart','2017-01-01' , 'sysuser' ),
('cc2_walmart'   ,  "Payment cards information"       , "Payment cards information"       , "active", 'system', 'critical',"card_info"      ,'walmart','2017-01-01' , 'sysuser' ),
('ssn_walmart'   ,  "Personal identifier information" , "Personal identifier information" , "active", 'system', 'critical',"personal_info"  ,'walmart','2017-01-01' , 'sysuser' ),
('virus_walmart' ,  "Virus"                           , "Virus"                           , "active", 'system', 'alert'   ,"virus"          ,'walmart','2017-01-01' , 'sysuser' ),
('ip_walmart'    ,  "Blacklist IP"                    , "Blacklist IP"                    , "active", 'system', 'alert'   ,"blacklist_ip"   ,'walmart','2017-01-01' , 'sysuser' ),
('email_walmart' ,  "Blocked Email"                   , "Blocked Email"                   , "active", 'system', 'alert'   ,"blacklist_email",'walmart','2017-01-01' , 'sysuser' ),
('spam_walmart'  ,  "Spam Email"                      , "Spam Email"                      , "active", 'system', 'alert'   ,"spam_email"     ,'walmart','2017-01-01' , 'sysuser' ),
('file_walmart'  ,  "Restricted FIle Type"            , "Restricted File Type"            , "active", 'system', 'alert'   ,"restricted_file",'walmart','2017-01-01' , 'sysuser' ),
('comp_walmart'  ,  "Company information"             , "Company information"             , "active", 'system', 'critical',"other"          ,'walmart','2017-01-01' , 'sysuser' ),
('pci_target'    ,  "PCI Compliance"                  , "PCI Compliance"                  , "active", 'system', 'info'    ,"pci"            ,'target' ,'2017-01-01' , 'sysuser' ),
('pci_safeway'   ,  "PCI Compliance"                  , "PCI Compliance"                  , "active", 'system', 'info'    ,"pci"            ,'safeway','2017-01-01' , 'sysuser' );

/* Rules for each Policy */
INSERT INTO `cas`.`rule` (`rule_id`, `name`, `description`, `state`, `defined_by`, `policy_id`,`managed_service_id`,`rule_enforcement_point_id`,`last_updated`,`created_by_id`) VALUES
('pci_rule1_wlm'         ,  "Walmart PCI Rule 1"    , "Walmart PCI Rule 1"   , "active", "system",  'pci_walmart'  ,'walmart_g_mail'   ,'incoming','2017-01-01', 'sysuser' ),
('pci_rule2_wlm'         ,  "Walmart PCI Rule 2"    , "Walmart PCI Rule 2"   , "active", "system",  'pci_walmart'  ,'walmart_g_mail'   ,'outgoing','2017-01-01', 'sysuser' ),
('pci_rule3_wlm'         ,  "Walmart PCI Rule 3"    , "Walmart PCI Rule 3"   , "active", "system",  'pci_walmart'  ,'walmart_g_drive'  ,'download','2017-01-01', 'sysuser' ),
('pci_rule4_wlm'         ,  "Walmart PCI Rule 4"    , "Walmart PCI Rule 4"   , "active", "system",  'pci_walmart'  ,'walmart_dropbox'  ,'download','2017-01-01', 'sysuser' ),
('card_info_rule1_wlm'   ,  "Credit Card Rule"      , "Credit Card Rule"     , "active", "system",  'cc1_walmart'  ,'walmart_g_mail'   ,'outgoing','2017-01-01', 'sysuser' ),
('card_info_rule2_wlm'   ,  "Card Information Rule" , "Card Information Rule", "active", "system",  'cc2_walmart'  ,'walmart_g_mail'   ,'outgoing','2017-01-01', 'sysuser' ),
('ssn_info_rule_wlm'     ,  "SSN Information Rule"  , "SSN Information Rule" , "active", "system",  'ssn_walmart'  ,'walmart_g_mail'   ,'outgoing','2017-01-01', 'sysuser' ),
('virus_rule_wlm'        ,  "Virus detector"        , "Virus detector"       , "active", "system",  'virus_walmart','walmart_g_drive'  ,'download','2017-01-01', 'sysuser' ),
('blocked_ip_rule_wlm'   ,  "Blocked IP"            , "Blocked IP"           , "active", "system",  'ip_walmart'   ,'walmart_g_drive'  ,'download','2017-01-01', 'sysuser' ),
('bad_email_rule_wlm'    ,  "Blacklisted Email"     , "Blacklisted Email"    , "active", "system",  'email_walmart','walmart_g_mail'   ,'incoming','2017-01-01', 'sysuser' ),
('spam_rule_wlm'         ,  "Spam Email"            , "Spam Email"           , "active", "system",  'spam_walmart' ,'walmart_g_mail'   ,'incoming','2017-01-01', 'sysuser' ),
('file_rule_wlm'         ,  "Questionable File"     , "Questionable File"    , "active", "system",  'file_walmart' ,'walmart_g_drive'  ,'download','2017-01-01', 'sysuser' ),
('pci_rule1_tgt'         ,  "Target PCI Rule 1"     , "Target PCI Rule 1"    , "active", "system",  'pci_target'   ,'target_outlook'   ,'incoming','2017-01-01', 'sysuser' ),
('pci_rule2_tgt'         ,  "Target PCI Rule 2"     , "Target PCI Rule 2"    , "active", "system",  'pci_target'   ,'target_outlook'   ,'outgoing','2017-01-01', 'sysuser' ),
('pci_rule1_sfw'         ,  "Safeway PCI Rule 1"    , "Safeway PCI Rule 1"   , "active", "system",  'pci_safeway'  ,'safeway_outlook'  ,'incoming','2017-01-01', 'sysuser' );

/* Conditions for each Rule */
INSERT INTO `cas`.`rule_condition` (`rule_condition_id`, `description`, `field_id`,`operator_id`,`value1`,`value2`,`rule_id`) VALUES
('spam_wlm',  "Check From Address" ,"from_address", "is"      , 'email1@junk.com', '', 'spam_rule_wlm' ),
('ssn_wlm' ,  "Check Email Body"   ,"email_body"  , "contains", 'ssn'            , '', 'ssn_info_rule_wlm'),
('cc_wlm'  ,  "Check Email Body"   ,"email_body"  , "contains", 'Cerdit Card'    , '', 'ssn_info_rule_wlm'),
('virus_name_wlm', "File name"     ,"file_name"   , "is"      , 'virus.exe'      , '', 'virus_rule_wlm'),
('virus_type_wlm', "File type"     ,"file_type"   , "is"      , 'exe'            , '', 'virus_rule_wlm'),
('blocked_ip_wlm', "Blocked IP"    ,"ip_address"  , "is"      , '10.10.10.10'    , '', 'blocked_ip_rule_wlm');




/* Actions for each Rule */




/* incident */
insert into `cas`.`incident` (incident_id, event_id, severity, status, policy_name, customer_name, platform, owner_name, owner_email, detected_on) values
('24-6334122', '55-9701047', 'critical', 'dismissed', 'Spam Email', 'Target', 'Google Suite', 'Stephanie Alvarez', 'salvarez0@unc.edu', '2016-11-24'),
 ('46-9231668', '88-0991885', 'info', 'dismissed', 'Credit Card Number', 'Target', 'Office 365', 'Dorothy Morris', 'dmorris1@europa.eu', '2016-07-28'),
 ('96-0809938', '84-7257771', 'critical', 'resolved', 'Credit Card Number', 'Target', 'Office 365', 'Frances Myers', 'fmyers2@behance.net', '2016-10-29'),
 ('43-6527806', '54-9972135', 'info', 'dismissed', 'Spam Email', 'Target', 'Dropbox', 'Eric Long', 'elong3@discovery.com', '2016-11-08'),
 ('08-0614315', '21-0345931', 'info', 'resolved', 'Spam Email', 'Walmart', 'Office 365', 'Diana Bowman', 'dbowman4@bigcartel.com', '2016-01-18'),
 ('01-7679466', '44-0069793', 'warning', 'resolved', 'Blacklist IP', 'Target', 'Office 365', 'Jack Medina', 'jmedina5@reference.com', '2016-11-09'),
 ('30-5706627', '48-3297972', 'warning', 'resolved', 'Credit Card Number', 'Walmart', 'Office 365', 'Billy Ruiz', 'bruiz6@reuters.com', '2016-03-28'),
 ('92-4491323', '03-0980831', 'info', 'resolved', 'Restricted FIle Type', 'Safeway', 'Office 365', 'Kenneth Stewart', 'kstewart7@marketwatch.com', '2016-03-18'),
 ('62-2584693', '70-9087229', 'info', 'in_progress', 'Credit Card Number', 'Target', 'Office 365', 'Patrick Garrett', 'pgarrett8@i2i.jp', '2016-09-20'),
 ('84-2099812', '13-3757529', 'critical', 'dismissed', 'PCI Compliance', 'Walmart', 'Dropbox', 'Johnny Shaw', 'jshaw9@sun.com', '2016-06-06'),
 ('88-1411864', '22-5312196', 'critical', 'new', 'Credit Card Number', 'Target', 'Google Suite', 'Mary Cunningham', 'mcunninghama@google.ca', '2016-12-29'),
 ('96-3742532', '16-3072565', 'alert', 'dismissed', 'Credit Card Number', 'Target', 'Office 365', 'Diana Chapman', 'dchapmanb@technorati.com', '2016-05-16'),
 ('69-7734604', '24-9750086', 'alert', 'new', 'Restricted FIle Type', 'Safeway', 'Office 365', 'Kathleen Perkins', 'kperkinsc@google.com.au', '2016-08-02'),
 ('47-4558368', '09-7177306', 'critical', 'resolved', 'Credit Card Number', 'Walmart', 'Dropbox', 'Debra Pierce', 'dpierced@comsenz.com', '2016-03-17'),
 ('91-5011890', '30-2326878', 'alert', 'resolved', 'Credit Card Number', 'Safeway', 'Office 365', 'Daniel Medina', 'dmedinae@goodreads.com', '2016-12-20'),
 ('62-0796104', '16-0522278', 'alert', 'in_progress', 'Credit Card Number', 'Target', 'Dropbox', 'Catherine Gomez', 'cgomezf@umich.edu', '2016-04-13'),
 ('95-0903718', '43-6835447', 'warning', 'in_progress', 'Restricted FIle Type', 'Safeway', 'Dropbox', 'Tina Richards', 'trichardsg@whitehouse.gov', '2016-12-19'),
 ('63-7437046', '61-6966706', 'warning', 'dismissed', 'Restricted FIle Type', 'Safeway', 'Google Suite', 'Christopher Jenkins', 'cjenkinsh@soundcloud.com', '2016-03-11'),
 ('40-5143106', '32-1554663', 'critical', 'new', 'Credit Card Number', 'Walmart', 'Google Suite', 'Marie Castillo', 'mcastilloi@google.nl', '2016-12-15'),
 ('37-1172090', '62-6790662', 'warning', 'resolved', 'Credit Card Number', 'Safeway', 'Dropbox', 'Heather Fisher', 'hfisherj@examiner.com', '2016-05-24'),
 ('89-2720844', '15-3132976', 'critical', 'in_progress', 'Restricted FIle Type', 'Safeway', 'Dropbox', 'Brian Lynch', 'blynchk@netscape.com', '2016-09-01'),
 ('53-7255887', '18-4549966', 'warning', 'dismissed', 'PCI Compliance', 'Target', 'Office 365', 'Sharon Howell', 'showelll@twitter.com', '2016-05-14'),
 ('97-3753078', '42-4561879', 'critical', 'in_progress', 'Credit Card Number', 'Walmart', 'Google Suite', 'Sean Greene', 'sgreenem@theglobeandmail.com', '2016-08-12'),
 ('03-5715483', '12-4761599', 'info', 'in_progress', 'Blacklist IP', 'Safeway', 'Office 365', 'Mildred Adams', 'madamsn@latimes.com', '2016-02-21'),
 ('55-4005211', '39-1137346', 'warning', 'dismissed', 'Blacklist IP', 'Safeway', 'Office 365', 'Lois Walker', 'lwalkero@seattletimes.com', '2016-11-21'),
 ('60-0454965', '31-1857460', 'alert', 'dismissed', 'Restricted FIle Type', 'Target', 'Dropbox', 'Scott Andrews', 'sandrewsp@hp.com', '2016-06-07'),
 ('82-3072352', '07-0033671', 'warning', 'new', 'PCI Compliance', 'Walmart', 'Dropbox', 'Cheryl Anderson', 'candersonq@nifty.com', '2016-11-28'),
 ('36-6781829', '24-4166711', 'info', 'in_progress', 'Credit Card Number', 'Target', 'Office 365', 'Nicole Gutierrez', 'ngutierrezr@cafepress.com', '2016-04-24'),
 ('84-7316921', '55-8609946', 'critical', 'in_progress', 'Credit Card Number', 'Walmart', 'Dropbox', 'Philip Miller', 'pmillers@economist.com', '2016-01-18'),
 ('03-9027798', '17-8933242', 'alert', 'in_progress', 'Credit Card Number', 'Walmart', 'Google Suite', 'George Wright', 'gwrightt@purevolume.com', '2016-11-10');
insert into `cas`.`incident` (incident_id, event_id, severity, status, policy_name, customer_name, platform, owner_name, owner_email, detected_on) values
('70-8241343', '59-6705810', 'alert', 'in_progress', 'PCI Compliance', 'Walmart', 'Dropbox', 'James Boyd', 'jboydu@phoca.cz', '2016-11-02'),
 ('53-8863344', '64-9574052', 'critical', 'dismissed', 'Restricted FIle Type', 'Target', 'Google Suite', 'Sara Holmes', 'sholmesv@slashdot.org', '2016-03-07'),
 ('08-6176013', '51-2523547', 'critical', 'resolved', 'Restricted FIle Type', 'Target', 'Office 365', 'Wayne Nelson', 'wnelsonw@about.com', '2016-11-23'),
 ('93-8252779', '17-6377407', 'warning', 'in_progress', 'Blacklist IP', 'Target', 'Dropbox', 'Richard Smith', 'rsmithx@cbc.ca', '2016-11-19'),
 ('26-1639878', '47-1581679', 'alert', 'in_progress', 'Credit Card Number', 'Walmart', 'Office 365', 'Billy Burns', 'bburnsy@salon.com', '2016-05-09'),
 ('17-1125695', '79-2857661', 'critical', 'new', 'Restricted FIle Type', 'Safeway', 'Office 365', 'Diane Morales', 'dmoralesz@msn.com', '2016-07-07'),
 ('78-4036743', '61-0324470', 'info', 'resolved', 'PCI Compliance', 'Safeway', 'Dropbox', 'Harold Cox', 'hcox10@xinhuanet.com', '2016-02-11'),
 ('81-2488726', '44-4793946', 'info', 'resolved', 'Spam Email', 'Walmart', 'Office 365', 'Aaron Bennett', 'abennett11@arstechnica.com', '2016-11-12'),
 ('01-4892013', '87-5655324', 'info', 'new', 'Blacklist IP', 'Target', 'Office 365', 'Kathryn Ward', 'kward12@addtoany.com', '2016-09-06'),
 ('52-2365508', '03-9170618', 'warning', 'in_progress', 'Credit Card Number', 'Walmart', 'Office 365', 'Debra Ferguson', 'dferguson13@dagondesign.com', '2016-05-24'),
 ('23-3376863', '97-9678731', 'alert', 'resolved', 'PCI Compliance', 'Target', 'Dropbox', 'Carol Crawford', 'ccrawford14@yellowbook.com', '2016-10-23'),
 ('81-6003593', '51-6171113', 'warning', 'resolved', 'Spam Email', 'Target', 'Dropbox', 'Andrew Banks', 'abanks15@umn.edu', '2016-08-14'),
 ('91-7789703', '90-8015965', 'info', 'resolved', 'Credit Card Number', 'Walmart', 'Google Suite', 'Keith Carpenter', 'kcarpenter16@independent.co.uk', '2016-08-31'),
 ('53-7822591', '57-2677043', 'alert', 'resolved', 'Restricted FIle Type', 'Safeway', 'Office 365', 'Michael Rose', 'mrose17@purevolume.com', '2016-04-29'),
 ('68-1695288', '69-4680011', 'critical', 'in_progress', 'Restricted FIle Type', 'Safeway', 'Google Suite', 'Stephen Clark', 'sclark18@nasa.gov', '2016-05-08'),
 ('87-7609811', '10-7999578', 'critical', 'new', 'Blacklist IP', 'Walmart', 'Office 365', 'Carolyn Edwards', 'cedwards19@unesco.org', '2016-12-21'),
 ('50-1278073', '70-5787442', 'warning', 'in_progress', 'Credit Card Number', 'Safeway', 'Office 365', 'Douglas Stanley', 'dstanley1a@shutterfly.com', '2016-01-30'),
 ('61-3769508', '13-7160515', 'critical', 'in_progress', 'PCI Compliance', 'Safeway', 'Office 365', 'Joyce Cox', 'jcox1b@ebay.co.uk', '2016-07-22'),
 ('47-1036369', '89-5070849', 'info', 'new', 'Credit Card Number', 'Safeway', 'Office 365', 'Samuel Morris', 'smorris1c@stanford.edu', '2016-12-28'),
 ('82-6008909', '36-3019087', 'warning', 'new', 'Restricted FIle Type', 'Target', 'Google Suite', 'Todd Ruiz', 'truiz1d@cnbc.com', '2016-09-26'),
 ('64-5410217', '44-1628501', 'critical', 'new', 'Credit Card Number', 'Safeway', 'Google Suite', 'Earl Hicks', 'ehicks1e@simplemachines.org', '2016-10-05'),
 ('27-9965542', '40-9544597', 'warning', 'resolved', 'Credit Card Number', 'Target', 'Google Suite', 'Maria Rivera', 'mrivera1f@goo.gl', '2016-04-24'),
 ('47-9624435', '46-1369218', 'alert', 'resolved', 'PCI Compliance', 'Safeway', 'Office 365', 'Jeremy Stephens', 'jstephens1g@squarespace.com', '2016-05-09'),
 ('94-6552918', '42-1623985', 'critical', 'new', 'Restricted FIle Type', 'Target', 'Google Suite', 'Angela Ruiz', 'aruiz1h@patch.com', '2016-02-10'),
 ('07-9796543', '12-6327259', 'alert', 'resolved', 'Restricted FIle Type', 'Walmart', 'Google Suite', 'Debra Wallace', 'dwallace1i@cbsnews.com', '2016-07-02'),
 ('99-5216921', '76-8040014', 'alert', 'in_progress', 'Spam Email', 'Target', 'Google Suite', 'Barbara Sullivan', 'bsullivan1j@networksolutions.com', '2016-06-14'),
 ('38-8682081', '12-8971356', 'critical', 'resolved', 'Credit Card Number', 'Walmart', 'Office 365', 'Shawn Owens', 'sowens1k@homestead.com', '2016-02-05'),
 ('62-5385851', '68-5216968', 'alert', 'new', 'Blacklist IP', 'Safeway', 'Dropbox', 'Amy Wallace', 'awallace1l@netvibes.com', '2016-12-19'),
 ('35-9365865', '82-9363398', 'alert', 'new', 'Credit Card Number', 'Safeway', 'Office 365', 'Paula Flores', 'pflores1m@discovery.com', '2016-04-27'),
 ('42-7605836', '63-1448978', 'critical', 'new', 'Credit Card Number', 'Safeway', 'Dropbox', 'Gloria Taylor', 'gtaylor1n@geocities.jp', '2016-12-18'),
 ('72-1395449', '66-9097518', 'alert', 'resolved', 'Credit Card Number', 'Walmart', 'Dropbox', 'Phyllis Ferguson', 'pferguson1o@fastcompany.com', '2016-01-15'),
 ('82-0722770', '40-0881459', 'alert', 'in_progress', 'Restricted FIle Type', 'Target', 'Google Suite', 'Patricia Hunter', 'phunter1p@sourceforge.net', '2016-07-11');
insert into `cas`.`incident` (incident_id, event_id, severity, status, policy_name, customer_name, platform, owner_name, owner_email, detected_on) values
 ('70-9445120', '30-3387546', 'alert', 'dismissed', 'Credit Card Number', 'Safeway', 'Google Suite', 'Dennis Banks', 'dbanks1q@va.gov', '2016-12-11'),
 ('30-6217234', '24-0583632', 'info', 'resolved', 'Credit Card Number', 'Target', 'Google Suite', 'Russell Washington', 'rwashington1r@wp.com', '2016-09-24'),
 ('99-7865874', '43-2712475', 'warning', 'new', 'Blacklist IP', 'Target', 'Dropbox', 'Alice Morrison', 'amorrison1s@baidu.com', '2016-10-14'),
 ('93-6945963', '09-7173658', 'warning', 'new', 'Spam Email', 'Target', 'Office 365', 'Frances Baker', 'fbaker1t@wufoo.com', '2016-08-20'),
 ('29-6896637', '34-7788279', 'alert', 'in_progress', 'Credit Card Number', 'Walmart', 'Google Suite', 'Christina Cole', 'ccole1u@oracle.com', '2016-04-21'),
 ('93-2586798', '24-5229487', 'warning', 'in_progress', 'Credit Card Number', 'Walmart', 'Dropbox', 'Joe Jacobs', 'jjacobs1v@odnoklassniki.ru', '2016-07-02'),
 ('38-4641578', '07-6837407', 'info', 'dismissed', 'Credit Card Number', 'Walmart', 'Office 365', 'Shawn Fields', 'sfields1w@360.cn', '2016-07-03'),
 ('89-4943768', '31-5554290', 'warning', 'in_progress', 'Blacklist IP', 'Safeway', 'Dropbox', 'William Morris', 'wmorris1x@yolasite.com', '2016-01-26'),
 ('79-7147640', '22-7882126', 'info', 'new', 'Credit Card Number', 'Target', 'Dropbox', 'Henry Mason', 'hmason1y@salon.com', '2016-11-04'),
 ('40-5546832', '64-4251482', 'info', 'new', 'Credit Card Number', 'Safeway', 'Dropbox', 'Shirley Hernandez', 'shernandez1z@netvibes.com', '2016-08-28'),
 ('07-4142422', '00-9018382', 'info', 'in_progress', 'Credit Card Number', 'Walmart', 'Dropbox', 'Willie Lee', 'wlee20@jalbum.net', '2016-09-08'),
 ('23-9982335', '77-9081405', 'critical', 'resolved', 'Restricted FIle Type', 'Safeway', 'Google Suite', 'Rachel Sanchez', 'rsanchez21@tiny.cc', '2016-07-23'),
 ('70-9316168', '72-6045738', 'critical', 'dismissed', 'Spam Email', 'Walmart', 'Google Suite', 'Linda Lewis', 'llewis22@sitemeter.com', '2016-11-27'),
 ('47-9973909', '41-1167608', 'info', 'new', 'Restricted FIle Type', 'Safeway', 'Office 365', 'Kevin Nguyen', 'knguyen23@netscape.com', '2016-06-13'),
 ('65-7284240', '08-7681098', 'critical', 'in_progress', 'PCI Compliance', 'Safeway', 'Office 365', 'Juan Thomas', 'jthomas24@storify.com', '2016-12-08'),
 ('43-0547556', '84-5889513', 'info', 'resolved', 'Restricted FIle Type', 'Safeway', 'Google Suite', 'Gregory Campbell', 'gcampbell25@engadget.com', '2016-04-01'),
 ('95-5218782', '99-2265659', 'alert', 'resolved', 'Blacklist IP', 'Walmart', 'Office 365', 'Susan Mcdonald', 'smcdonald26@xinhuanet.com', '2016-01-24'),
 ('59-1220064', '64-3392001', 'alert', 'resolved', 'Credit Card Number', 'Target', 'Google Suite', 'Carolyn Hall', 'chall27@uol.com.br', '2016-10-25'),
 ('57-1480887', '26-9146310', 'critical', 'in_progress', 'Restricted FIle Type', 'Walmart', 'Dropbox', 'Charles Martin', 'cmartin28@nba.com', '2016-10-15'),
 ('34-8348309', '67-6030751', 'info', 'resolved', 'Credit Card Number', 'Walmart', 'Dropbox', 'Randy Thomas', 'rthomas29@nba.com', '2016-09-04'),
 ('06-1387107', '49-5407800', 'warning', 'dismissed', 'Restricted FIle Type', 'Safeway', 'Office 365', 'Nancy Ferguson', 'nferguson2a@forbes.com', '2016-06-23'),
 ('82-7824846', '80-3034184', 'warning', 'dismissed', 'Restricted FIle Type', 'Target', 'Office 365', 'Jeffrey Bailey', 'jbailey2b@cnn.com', '2016-08-24'),
 ('62-7422998', '52-5372011', 'critical', 'new', 'Spam Email', 'Walmart', 'Office 365', 'Jeremy Hughes', 'jhughes2c@spotify.com', '2016-07-15'),
 ('63-1088530', '72-0296745', 'critical', 'resolved', 'Credit Card Number', 'Target', 'Office 365', 'Anthony Powell', 'apowell2d@flickr.com', '2016-08-08'),
 ('54-7857112', '44-1974515', 'critical', 'resolved', 'Credit Card Number', 'Walmart', 'Office 365', 'Jesse Sullivan', 'jsullivan2e@gov.uk', '2016-07-11'),
 ('33-0106771', '64-0909721', 'warning', 'dismissed', 'Blacklist IP', 'Safeway', 'Google Suite', 'Benjamin Kelley', 'bkelley2f@washingtonpost.com', '2016-07-07');
insert into `cas`.`incident` (incident_id, event_id, severity, status, policy_name, customer_name, platform, owner_name, owner_email, detected_on) values
('77-8374772', '23-1826573', 'critical', 'dismissed', 'PCI Compliance', 'Safeway', 'Office 365', 'Anthony Mason', 'amason2g@gmpg.org', '2016-08-28'),
 ('57-3612132', '08-5357597', 'info', 'new', 'Credit Card Number', 'Walmart', 'Office 365', 'Peter Frazier', 'pfrazier2h@youtube.com', '2016-03-19'),
 ('55-9816050', '63-6041011', 'critical', 'new', 'PCI Compliance', 'Target', 'Dropbox', 'Albert Carroll', 'acarroll2i@reuters.com', '2016-11-21'),
 ('08-8563582', '56-5109597', 'info', 'dismissed', 'Credit Card Number', 'Safeway', 'Dropbox', 'Bonnie Mcdonald', 'bmcdonald2j@ft.com', '2016-07-02'),
 ('05-9567570', '33-9788220', 'alert', 'in_progress', 'Credit Card Number', 'Target', 'Office 365', 'Steve Hamilton', 'shamilton2k@sun.com', '2016-07-07'),
 ('70-5580250', '02-2903305', 'warning', 'dismissed', 'PCI Compliance', 'Walmart', 'Google Suite', 'Helen Palmer', 'hpalmer2l@etsy.com', '2016-09-25'),
 ('44-0568436', '92-3424082', 'critical', 'in_progress', 'Credit Card Number', 'Safeway', 'Dropbox', 'Louise Gilbert', 'lgilbert2m@elpais.com', '2016-10-06'),
 ('65-4908024', '14-5515086', 'alert', 'resolved', 'Spam Email', 'Walmart', 'Dropbox', 'Barbara Welch', 'bwelch2n@stumbleupon.com', '2016-06-19'),
 ('72-6761676', '14-6283769', 'alert', 'resolved', 'Credit Card Number', 'Safeway', 'Google Suite', 'Randy Fields', 'rfields2o@elegantthemes.com', '2016-05-22'),
 ('55-1505612', '33-2556201', 'alert', 'new', 'Credit Card Number', 'Safeway', 'Dropbox', 'Juan Austin', 'jaustin2p@salon.com', '2016-05-16'),
 ('60-0813793', '90-5936810', 'alert', 'dismissed', 'Blacklist IP', 'Safeway', 'Google Suite', 'Charles Hudson', 'chudson2q@indiatimes.com', '2016-12-18'),
 ('29-4247320', '61-7749888', 'alert', 'resolved', 'Restricted FIle Type', 'Target', 'Google Suite', 'Laura Graham', 'lgraham2r@issuu.com', '2016-12-09');
