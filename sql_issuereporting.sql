CREATE DATABASE Reporting;
Use Reporting;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS `report` (
  `ID` int(11) NOT NULL,
  `Category` varchar(20) NOT NULL,
  `Longitude` decimal(10,0) NOT NULL,
  `Latitude` decimal(10,0) NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Status` varchar(20) NOT NULL DEFAULT 'Unfixed',
  `Pers_name` varchar(20) DEFAULT NULL,
  `Pers_email` varchar(20) DEFAULT NULL,
  `Description` varchar(20) DEFAULT NULL,
  `Picture` int(11) DEFAULT NULL
) ENGINE=InnoDB;


ALTER TABLE `report`
  ADD PRIMARY KEY (`ID`);


 ALTER TABLE `report`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
  
INSERT INTO `report`
(`ID`, `Category`, `Longitude`, `Latitude`, `Timestamp`, `Status`, `Pers_name`, `Pers_email`, `Description`, `Picture`) VALUES 
(1,'lampor',17.6389270,59.8585640,2015,'unfixed','selma','sel@gmail.com','sönder','bild'),
(2,'lampor',17.6470790,59.8389770,2015,'unfixed','selma','sel@gmail.com','sönder','bild'); 

