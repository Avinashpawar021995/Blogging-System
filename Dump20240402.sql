-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: bloger
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(200) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (18,'we have information and details in admission provide in time to time provide blogging.  ','admission '),(19,'this state base  job this use in application and communication application ','Groveman job'),(20,'this new sport blog  add','sport'),(22,'this  process connects user and employee  application','software develpor'),(23,'connect user declare and information application','t-series');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `post_post_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2dgdoh41vnobahepwimydikli` (`post_post_id`),
  CONSTRAINT `FK2dgdoh41vnobahepwimydikli` FOREIGN KEY (`post_post_id`) REFERENCES `posts` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (18,'how can  start in march in 2024\n',22),(19,'i  have pass the required document pdf ',22),(20,'hi...,\ni just pass the massage \nthis  port',22),(21,'java is beast language',23),(22,'java is very beltful language',23),(23,'use base language',23);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `post_id` bigint NOT NULL AUTO_INCREMENT,
  `add_date` datetime(6) DEFAULT NULL,
  `contect` varchar(255) DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `post_title` varchar(100) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `category_category_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `FK6ptdc479ljii165i3mmdv2yi7` (`category_category_id`),
  KEY `FKam8ar6luvp8afhfu20gfsydo9` (`user_id`),
  KEY `FKhseyw1srb2s3x8awb8v3vsev3` (`category_id`),
  CONSTRAINT `FK6ptdc479ljii165i3mmdv2yi7` FOREIGN KEY (`category_category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `FKam8ar6luvp8afhfu20gfsydo9` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKhseyw1srb2s3x8awb8v3vsev3` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (22,'2024-03-15 13:17:36.396000',NULL,'default.jpg',NULL,'Java','<p>CET SEL&nbsp; start in 2024</p><p>nukari port datils&nbsp;</p>',NULL,4,18),(23,'2024-03-20 15:14:04.669000',NULL,'apple.png',NULL,'Java','<p>Java is oop langauge , abstract class this&nbsp; is use interface use application&nbsp; and api developer that is&nbsp; used connected<br></p>',NULL,4,18);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `roleid` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (501,'ROLE_ADMIN'),(502,'ROLE_NORMAL');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `about` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'this massege passing test perpes','avinash@gmail.com','Pass@123','avinash'),(2,'this person in life is osum ','ram@gmail.com','Ram@123','ram'),(3,'this person in life is osum ','ramgmail.com','Ram@123',''),(4,NULL,'shaym@gmail.comd',NULL,'shays'),(5,'I am childer who all','jau@gmail.com','$2a$10$FA/N6HSODhAaEC9vEGML/uDmVWUM51VAOEZTpwlMwxbAuhjt4zx0q','janu'),(6,'I am childer in famile','gouri@gmail.com','$2a$10$4fc6zvftA/9rEvCvGc38MOH2DUjQRxNxjMs.LGEBZQWchvyDzzgrO','gouri'),(7,'I am childer in famile','gaju@gmail.com','$2a$10$CCnfjO2vMMdOeIX7zcU4SebXY/3sKk.DKtSaNtRbkYbkzNb4usnLu','gaju'),(8,'I am childer in famile','gaju@gmail.com','$2a$10$rhGJG7dE1B5NctkH5gUiE.WMQ7l8o7/voPvTN5/Li58S.7oAC22zq','gaju'),(9,'this  is not ','gaja@gmail.com','PAss@123','gajunana'),(10,'that is course','vijay@gmail.com','Pass@123','vijay'),(11,'I am new join company','priven@gmail.com','Pass@123','priven kender'),(13,' this is user','rakesh@gmail.com','$2a$10$m3592kvNiXF3kfaJcAxsaOV/YYZMtFv933wcCZifT.7bNj2TxfrCi','rakesh patil'),(14,'i am  admin this  software','avinashpawar0295@gmail.com','$2a$10$buk27histrr3ePHKEudVHutFFbUpUUfzQGtIm0Q2xE67LWQre6QFG','Avinash Ankush Pawar'),(15,'this  is my container','priya@gmail.com','$2a$10$NTksAoq283j2ZE.O5it0s.c6drECegtJTMMxbBPSs4.2OB2UDhHH2','priya'),(16,'I am blogger','dhiraj@gmail.com','$2a$10$maWGN3Fnijl2jONAtWkQue27JlekHZNJPmPTxHGl/v.Gr/tkCo38S','Dhiraj Chaudhary'),(17,'this is appl','vijay12@gmail.com','$2a$10$tyzkN7whsSU1.N4OPnnHhO4d4aDFSri0Byb9IYSgomZwN.bWliZ/y','ram vijay'),(18,' that  is good approch','vijay@gmail.com','$2a$10$1u./2EX13rY5AVgaBiB9nOKyZC.0GTYlXS5q3OInISw9qoNA6ptsa','ram vijay'),(19,'this my project','avinash@gmail.com','$2a$10$DUV6c4trh2eILqzAMHjVfuPvsAZf6Csp1VidOOU65TrsEHAEeCjUC','avinash pawar');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` bigint NOT NULL,
  `roleid` int NOT NULL,
  PRIMARY KEY (`user_id`,`roleid`),
  KEY `FK694n1a9kodcak4ys5a7jmyab9` (`roleid`),
  CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK694n1a9kodcak4ys5a7jmyab9` FOREIGN KEY (`roleid`) REFERENCES `role` (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (4,501),(8,501),(15,501),(13,502),(14,502),(15,502),(16,502),(17,502),(18,502),(19,502);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 10:50:15
