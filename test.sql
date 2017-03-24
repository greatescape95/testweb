-- MySQL dump 10.13  Distrib 5.5.54, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: wine_db
-- ------------------------------------------------------
-- Server version	5.5.54-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message_text` text NOT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (3,'s','e','ere'),(4,'s','f','fdfd'),(5,'dsds','a@b','dsadasdsa'),(6,'sasa','','vsdvsd'),(7,'sasa','asd@b','vsdvsd'),(8,'dsfsd','a@bbb','fddffd'),(9,'test','test@test','teststst'),(10,'test','test@test','teststst'),(11,'test','test@test','teststst'),(12,'dsads','a@bb','dsaads'),(13,'dsads','a@bb','dsaads'),(14,'dsads','a@bb','dsaads'),(15,'dsads','a@bb','dsaads'),(16,'dsads','a@bb','dsaads'),(17,'dsads','a@bb','dsaads'),(18,'dassad','a@bn','sdsad'),(19,'dassad','a@bn','sdsad'),(20,'dassad','a@bn','sdsad'),(21,'Toni','toni@something','teeest'),(22,'Toni','toni@something','teeest'),(23,'Toni','toni@something','teeest'),(24,'Toni','toni@something','teeest'),(25,'Toni','toni@something','teeest'),(26,'Toni','toni@something','teeest'),(27,'Toni','toni@something','teeest'),(28,'Toni','toni@something','teeest'),(29,'Toni','toni@something','teeest'),(30,'sdasdasad','a@bb','dsadsasda'),(31,'sdasdasad','a@bb','dsadsasda'),(32,'sdasdasad','a@bb','dsadsasda'),(33,'dfsdfdfs','a@b','dasdasdas'),(34,'dfsdfdfs','a@b','dasdasdas'),(35,'dfsdfdfs','a@b','dasdasdas'),(36,'cdcds','a@b','dsasdasda'),(37,'cdcds','a@b','dsasdasda'),(38,'cdcds','a@b','dsasdasda'),(39,'dsdssd','a@bb','dssdsd'),(40,'dsdssd','a@bb','dssdsd'),(41,'dsdssd','a@bb','dssdsd'),(42,'fddsfdfs','a@bbn','fefefe'),(43,'fddsfdfs','a@bbn','fefefe'),(44,'fddsfdfs','a@bbn','fefefe'),(45,'fddsfdfs','a@bbn','fefefe'),(46,'fddsfdfs','a@bbn','fefefe'),(47,'fddsfdfs','a@bbn','fefefe'),(48,'cdscds','a@bb','dasdasdas'),(49,'cdscds','a@bb','dasdasdas'),(50,'cdscds','a@bb','dasdasdas'),(51,'asdasda','a@bnbn','dssdsdsd'),(52,'asdasda','a@bnbn','dssdsdsd'),(53,'asdasda','a@bnbn','dssdsdsd'),(54,'asdasda','a@bnbn','dssdsdsd'),(55,'asdasda','a@bnbn','dssdsdsd'),(56,'asdasda','a@bnbn','dssdsdsd'),(57,'dsfdfs','csaacd','cdscd'),(58,'dsfdfs','csaacd','cdscd'),(59,'dsfdfs','csaacd','cdscd'),(60,'dsfdfs','csaacd','cdscd'),(61,'dsfdfs','csaacd','cdscd'),(62,'dsfdfs','csaacd','cdscd'),(63,'dcssdc','cdscd','csdscdscd'),(64,'dcssdc','cdscd','csdscdscd'),(65,'dcssdc','cdscd','csdscdscd'),(66,'dcssdc','cdscd','csdscdscd'),(67,'dcssdc','cdscd','csdscdscd'),(68,'dcssdc','cdscd','csdscdscd'),(69,'dcscds','cdsscd','cdcdscds'),(70,'dcscds','cdsscd','cdcdscds'),(71,'dcscds','cdsscd','cdcdscds'),(72,'dcscds','cdsscd','cdcdscds'),(73,'dcscds','cdsscd','cdcdscds'),(74,'dcscds','cdsscd','cdcdscds'),(75,'dcscds','cdsscd','cdcdscds'),(76,'dcscds','cdsscd','cdcdscds'),(77,'dcscds','cdsscd','cdcdscds'),(78,'fsfs','fsfs','fssfs'),(79,'dsdssd','dssdds','dssdsdsdsd'),(80,'dsdssd','dssdds','dssdsdsdsd'),(81,'dsd','dssd','dsdssd'),(82,'dsadsa','dsaadssad','sdasadsad'),(83,'dsadsa','dsaadssad','sdasadsad'),(84,'cdscd','dsccsd','csdscdsdc'),(85,'cdscsd','cdscds','cdscdcsd'),(86,'cdscsd','cdscds','cdscdcsd'),(87,'vfvf','vfvfvf','vfvfvf'),(88,'ccds','cdsc','cdsscdcsd'),(89,'vdvdvd','vdvdvd','vdvdvdvd'),(90,'vdvdvd','vdvdvd','vdvdvdvd'),(91,'svdsd','vsdvdvd','dvsvvsdvs'),(92,'svdsd','vsdvdvd','dvsvvsdvs'),(93,'cdscds','cdsscd','cdsscdcsd'),(94,'cdscs','cdsscd','cdscsdcsd'),(95,'yyy','cxyyc','xcxyy'),(96,'yyy','cxyyc','xcxyy'),(97,'cdsscdcds','csdsdccdscds','cdssddcscdsdsdc'),(98,'cdsscdcds','csdsdccdscds','cdssddcscdsdsdc'),(99,'fddfdfdf','fdfddffd','fdfddffd'),(100,'fddfdfdf','fdfddffd','fdfddffd'),(101,'fddfdfdf','fdfddffd','fdfddffd');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-24 12:56:36
