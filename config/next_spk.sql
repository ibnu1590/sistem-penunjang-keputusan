# Host: localhost  (Version 5.5.5-10.4.24-MariaDB)
# Date: 2022-07-23 14:19:57
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "kreditur"
#

DROP TABLE IF EXISTS `kreditur`;
CREATE TABLE `kreditur` (
  `Id_kreditur` int(11) NOT NULL AUTO_INCREMENT,
  `nik` int(1) DEFAULT NULL,
  `nama` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id_kreditur`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

#
# Data for table "kreditur"
#

INSERT INTO `kreditur` VALUES (1,12345,'ibnu'),(5,6666,'nuribnuwicaksono'),(6,1313,'septi');
