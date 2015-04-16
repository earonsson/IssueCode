CREATE DATABASE Reporting;
Use Reporting;

 SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
 SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS `report` (
  `ID` int(11) NOT NULL,
  `Category` varchar(20) NOT NULL,
  `Longitude` float8 NOT NULL,
  `Latitude` float8 NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Status` varchar(20) NOT NULL DEFAULT 'Unfixed',
  `Pers_name` varchar(20) DEFAULT NULL,
  `Pers_email` varchar(20) DEFAULT NULL,
  `Description` varchar(20) DEFAULT NULL,
  `Picture` varchar(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


ALTER TABLE `report`
  ADD PRIMARY KEY (`ID`);


 ALTER TABLE `report`
 MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;


INSERT INTO `report`
(`ID`, `Category`, `Longitude`, `Latitude`, `Timestamp`, `Status`, `Pers_name`, `Pers_email`, `Description`, `Picture`) VALUES 
(NULL, 'Lampor',17.6389270,59.8585640, current_timestamp(),'Unfixed','Selma','sel@gmail.com','sonder blabla','bild1'),
(NULL,'Lampor',17.5922220, 59.8501940, current_timestamp(),'Unfixed','Selma','sel@gmail.com','krossad blabla','bild2'),
(NULL, 'Lampor',7.6727530, 590.8755150, current_timestamp(),'Unfixed','Leife','leife@msn.com','trasig blabla','bild3');


Select * from Report;

-- drop database reporting;