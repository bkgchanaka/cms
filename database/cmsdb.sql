-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.9.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for cmsdb
DROP DATABASE IF EXISTS `cmsdb`;
CREATE DATABASE IF NOT EXISTS `cmsdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `cmsdb`;

-- Dumping structure for table cmsdb.address_details
DROP TABLE IF EXISTS `address_details`;
CREATE TABLE IF NOT EXISTS `address_details` (
  `address_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `address_line_1` varchar(200) NOT NULL,
  `address_line_2` varchar(200) DEFAULT NULL,
  `country_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table cmsdb.address_details: ~0 rows (approximately)
/*!40000 ALTER TABLE `address_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `address_details` ENABLE KEYS */;

-- Dumping structure for table cmsdb.customers
DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_of_birth` datetime(6) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nic_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table cmsdb.customers: ~3 rows (approximately)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` (`id`, `date_of_birth`, `name`, `nic_number`) VALUES
	(3, '2022-09-16 00:00:00.000000', 'Nuwan Silva', '893474579v'),
	(5, '2022-09-09 00:00:00.000000', 'Viraj Chanaka', '893474579v'),
	(6, '2022-09-13 00:00:00.000000', 'Saman Priyantha', '893474579v');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Dumping structure for table cmsdb.family_members
DROP TABLE IF EXISTS `family_members`;
CREATE TABLE IF NOT EXISTS `family_members` (
  `family_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`family_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table cmsdb.family_members: ~0 rows (approximately)
/*!40000 ALTER TABLE `family_members` DISABLE KEYS */;
/*!40000 ALTER TABLE `family_members` ENABLE KEYS */;

-- Dumping structure for table cmsdb.mobile_details
DROP TABLE IF EXISTS `mobile_details`;
CREATE TABLE IF NOT EXISTS `mobile_details` (
  `mobile_id` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL,
  `mobile_number` int(10) NOT NULL,
  PRIMARY KEY (`mobile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table cmsdb.mobile_details: ~0 rows (approximately)
/*!40000 ALTER TABLE `mobile_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `mobile_details` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
