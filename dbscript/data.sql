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
INSERT INTO supported_platform (`id`, `name`) VALUES
(100 , "Google Suite"),
(101 , "Dropbox"),
(102 , "Office 365");


/* supported_service*/
INSERT INTO supported_service (`id`, `name`, `description`, `supported_platform_id` ) VALUES
(150 , "G Mail"        , "G Mail"       , 100),
(151 , "Google Drive"  , "Google Drive" , 100),
(152 , "Dropbox"       , "Dropbox"      , 101),
(153 , "Outlook"       , "Outlook"      , 102),
(154 , "One Drive"     , "One Drive"    , 102),
(155 , "Google Hosting", "Google App Engine" , 100);

/* Service Category */
INSERT INTO service_category (`id`, `name`) VALUES
(200 , "Identity"),
(201 , "Email"   ),
(202 , "Drive"   ),
(203 , "Network" ),
(204 , "Endpoint"),
(205 , "Hosting" );

/* Field Name */
INSERT INTO field (`id`,`name`, `service_category_id`) VALUES
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
(316 , "IP Address"       , 200),
(317 , "IP Address"       , 202),
(318 , "IP Address"       , 203),
(319 , "IP Address"       , 204),
(320 , "IP Address"       , 205);

/* Operator */
INSERT INTO operator (`id`,`name`, `argument_count`) VALUES
(400 , "is"           ,1),
(401 , "contains"     ,1),
(402 , "regex"        ,1),
(403 , "starts with"  ,1),
(404 , "is not"       ,1),
(405 , "is empty"     ,0),
(406 , "is_not_empty" ,0),
(407 , "is more than" ,1),
(408 , "is less than" ,1),
(409 , "is between"   ,2),
(410 , "end with"     ,1);

/* Action */
INSERT INTO action (`id`, `name`, `type`) VALUES
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
INSERT INTO rule_enforcement_point (`id`, `name`, `service_category_id`) VALUES
(700  , "Request" , 200),
(701  , "Incoming", 201),
(702  , "Outgoing", 201),
(703  , "Download", 202),
(704  , "Upload"  , 202),
(705  , "At Rest" , 202),
(706  , "Compute Process", 205);

/* Defines set of actions available for each enforcement points */
INSERT INTO rule_enforcement_point_action_association (`rule_enforcement_point_id`, `action_id`) VALUES
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
(705, 503 ),
(706, 501 ),
(706, 502 ),
(706, 506 );



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
INSERT INTO security_provider (`id`, `name`,`description`) VALUES
(10000 , "SonicWALL" , "SonicWALL"),
(10001 , "Security Incorporation" , "Security Incorporation");

/* Customers */
INSERT INTO customer (`id`, `name`,`description`,`customer_code`,`security_provider_id`) VALUES
(20000  , "Walmart" , "Walmart", "wlm" ,10000),
(20001  , "Safeway" , "Safeway", "sfw" ,10001),
(20002  , "Target"  , "Target" , "tgt" ,10000);

/* Managed Platforms */
INSERT INTO managed_platform (`id`, `supported_platform_id`, `customer_id`) VALUES
(30000  , 100  , 20000 ),
(30001  , 101  , 20000 ),
(30002  , 100  , 20000 ),
(30003  , 102  , 20002 ),
(30004  , 101  , 20002 ),
(30005  , 100  , 20001 ),
(30006  , 102  , 20001 );

/* Managed Services */
INSERT INTO managed_service (`id`, `managed_platform_id`, `supported_service_id`) VALUES
(40000  ,  30000 , 150 ),  /*  Walmart: Google Suite , G Mail     */
(40001  ,  30000 , 151 ),  /*  Walmart: Google Suite , G Drive    */
(40002  ,  30001 , 152 ),  /*  Walmart: Dropbox , Dropbox         */
(40003  ,  30003 , 153 ),  /*  Target : Office 365 , Outlook      */
(40004  ,  30003 , 154 ),  /*  Target : Office 365 , One Drive    */
(40005  ,  30004 , 152 ),  /*  Target : Dropbox , Dropbox         */
(40006  ,  30005 , 150 ),  /*  Safeway: Google Suite , G Mail     */
(40007  ,  30006 , 153 ),  /*  Safeway: Office 365 , Outlook      */
(40008  ,  30002 , 155 );  /*  Walmart: Google Suite , App Engine */

/* Policy Types*/
INSERT INTO policy_type (`id`, `name`) VALUES
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
INSERT INTO policy (`id`, `name`,`description`,`state`, `severity`,`policy_type_id`, `customer_id`, `created`, `updated`,`created_by`,`updated_by`) VALUES
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
/* Try to keep all the rules from same policy to have supported service that belongs to same platform */
INSERT INTO rule (`id`, `name`, `description`, `policy_id`, `managed_service_id`,`rule_enforcement_point_id`,`created`,`updated`,`created_by`,`updated_by`) VALUES
(3000001  ,  "Walmart PCI Rule 1"        , "Walmart PCI Rule 1"       ,   100000  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000002  ,  "Walmart PCI Rule 2"        , "Walmart PCI Rule 2"       ,   100000  , 40001 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Download  */
(3000003  ,  "Walmart PHI Rule 1"        , "Walmart PHI Rule 1"       ,   100001  , 40001 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Download  */
(3000004  ,  "Walmart PHI Rule 2"        , "Walmart PHI Rule 2"       ,   100001  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Outgoing  */
(3000005  ,  "Walmart Card Info Rule 1"  , "Walmart Card Info Rule 1" ,   100002  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Outgoing  */
(3000006  ,  "Walmart Card Info Rule 2"  , "Walmart Card Info Rule 2" ,   100002  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Outgoing  */
(3000007  ,  "Walmart Card Info Rule 2"  , "Walmart Card Info Rule 3" ,   100002  , 40001 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Download  */
(3000008  ,  "Walmart Pay Info Rule 1"   , "Walmart Pay Info Rule 1"  ,   100003  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Outgoing  */
(3000009  ,  "Walmart Pay Info Rule 2"   , "Walmart Pay Info Rule 2"  ,   100003  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Outgoing  */
(3000010  ,  "Walmart SSN Info Rule 1"   , "Walmart SSN Info Rule 1"  ,   100004  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Outgoing  */
(3000011  ,  "Walmart SSN Info Rule 2"   , "Walmart SSN Info Rule 2"  ,   100004  , 40001 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Outgoing  */
(3000012  ,  "Walmart Virus Rule 1"      , "Walmart Virus Rule 1"     ,   100005  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000013  ,  "Walmart Virus Rule 2"      , "Walmart Virus Rule 2"     ,   100005  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000014  ,  "Walmart Blocked IP Rule 1" , "Walmart Blocked IP Rule 1",   100006  , 40002 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming  */
(3000015  ,  "Walmart Blocked IP Rule 2" , "Walmart Blocked IP Rule 2",   100006  , 40002 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Download  */
(3000016  ,  "Walmart Blocked IP Rule 3" , "Walmart Blocked IP Rule 3",   100006  , 40002 , 706 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Compute Process */
(3000017  ,  "Walmart Email Rule 1"      , "Walmart Email Rule 1"     ,   100007  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000018  ,  "Walmart Email Rule 2"      , "Walmart Email Rule 2"     ,   100007  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000019  ,  "Walmart Email Rule 3"      , "Walmart Email Rule 3"     ,   100007  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000020  ,  "Walmart Email Rule 4"      , "Walmart Email Rule 4"     ,   100007  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000021  ,  "Walmart Email Rule 5"      , "Walmart Email Rule 5"     ,   100007  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000022  ,  "Walmart Email Rule 6"      , "Walmart Email Rule 6"     ,   100007  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000023  ,  "Walmart Spam Rule 1"       , "Walmart Spam Rule 1"      ,   100008  , 40000 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000024  ,  "Walmart Spam Rule 2"       , "Walmart Spam Rule 2"      ,   100008  , 40001 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000025  ,  "Walmart Org Info Rule 1"   , "Walmart Org Info Rule 1"  ,   100009  , 40001 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Outgoing  */
(3000026  ,  "Walmart Org Info Rule 2"   , "Walmart Org Info Rule 2"  ,   100009  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Outgoing  */
(3000027  ,  "Walmart Org Info Rule 3"   , "Walmart Org Info Rule 3"  ,   100009  , 40001 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Outgoing  */
(3000028  ,  "Target PCI Rule 1"         , "Target PCI Rule 1"        ,   100010  , 40003 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000029  ,  "Target PCI Rule 2"         , "Target PCI Rule 1"        ,   100010  , 40004 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Download  */
(3000030  ,  "Safeway PCI Rule 1"        , "Safeway PCI Rule 1"       ,   100011  , 40007 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000031  ,  "Safeway PCI Rule 2"        , "Safeway PCI Rule 2"       ,   100011  , 40007 , 701 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Incomming */
(3000032  ,  "Safeway PCI Rule 3"        , "Safeway PCI Rule 3"       ,   100011  , 40007 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ), /* Download  */
(3000033  ,  "Walmart Restricted File Rule1" , "Walmart Restricted File Rule1",100012  , 40007 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ); /* Download  */



/*
(3000001  ,  "Walmart PCI Rule 2"    , "Walmart PCI Rule 2"   ,   100000  , 40000 , 702 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
(3000011  ,  "Questionable File"     , "Questionable File"    ,   100008  , 40001 , 703 ,"2017-01-01", "2017-01-01", "sysuser", "sysuser" ),
*/

/* Conditions for each Rule */
INSERT INTO `cas`.`rule_condition` (`id`, `description`, `field_id`,`operator_id`,`value1`,`value2`,`rule_id`) VALUES

(4000001, "Mail from stop.com"               ,301 , 400 , "email1@stop.com"      , "", 3000001),
(4000002, "Downloading Executable"           ,313 , 400 , "exe"                  , "", 3000002),
(4000003, "Downloading Large Files"          ,312 , 407 , "1 GB"                 , "", 3000003),
(4000004, "Sending Attachments"              ,305 , 406 , ""                     , "", 3000004),
(4000005, "Sending Credit Card Info"         ,303 , 402 , "^9999 9999 9999 9999$", "", 3000005),
(4000006, "Sending Cretit Card Type"         ,303 , 401 , "mastercard"           , "", 3000006),
(4000007, "Downloading Credit Card Number"   ,314 , 402 , "^9999 9999 9999 9999$", "", 3000007),
(4000008, "Subject contains Pay Info"        ,300 , 402 , "^9999 9999 9999 9999$", "", 3000008),
(4000009, "Email contains Pay Info"          ,303 , 402 , "^9999 9999 9999 9999$", "", 3000009),
(4000010, "Subject contains SSN"             ,300 , 402 , "^999 99 9999$"        , "", 3000010),
(4000011, "Email contains SSN"               ,303 , 402 , "^999 99 9999$"        , "", 3000011),
(4000012, "Contains .exe in attachment"      ,309 , 400 , ".exe"                 , "", 3000012),
(4000013, "Contains .dll in attachment"      ,309 , 400 , ".dll"                 , "", 3000013),
(4000014, "Mail from blocked"                ,301 , 400 , "abc@blocked.com"      , "", 3000014),
(4000015, "Downloading from blocked ID"      ,317 , 400 , "1.1.1.1"              , "", 3000015),
(4000016, "Processing in Blocked IP"         ,320 , 400 , "1.1.1.1"              , "", 3000016),
(4000017, "Mail from Junk.com"               ,301 , 400 , "email1@junk.com"      , "", 3000017),
(4000018, "Mail from ads.com"                ,301 , 400 , "email1@ads.com"       , "", 3000018),
(4000019, "Mail from deals.com"              ,301 , 400 , "email1@deals.com"     , "", 3000019),
(4000020, "Subject contains 'Free'"          ,300 , 401 , "Free"                 , "", 3000020),
(4000021, "Body contains 'Free'"             ,303 , 401 , "Free"                 , "", 3000021),
(4000022, "Contains .exe in attachment"      ,309 , 400 , ".exe"                 , "", 3000022),
(4000023, "Mail from spam.com"               ,301 , 400 , "email1@spam.com"      , "", 3000023),
(4000024, "Mail from free.com"               ,301 , 400 , "email1@free.com"      , "", 3000024),
(4000025, "Contains walmart.pdf in attachment" ,308 , 400 , "walmart.pdf"        , "", 3000025),
(4000026, "Email contains walmart id"          ,303 , 400 , "walmart id"         , "", 3000026),
(4000027, "Email contains walmart emp"         ,303 , 400 , "walmart emp"        , "", 3000027),
(4000028, "Mail from stop.com"               ,301 , 400 , "email1@junk.com"      , "", 3000028),
(4000029, "Downloading Executable"           ,313 , 400 , "exe"                  , "", 3000029),
(4000030, "Mail from stop.com"               ,301 , 400 , "email1@stop.com"      , "", 3000030),
(4000031, "Mail from junk.com"               ,301 , 400 , "email1@junk.com"      , "", 3000031),
(4000032, "Downloading Executable"           ,313 , 400 , "exe"                  , "", 3000032),
(4000033, "Downloading Executable "          ,313 , 400 , "exe"                  , "", 3000033);
