-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 05, 2024 at 02:17 PM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ihm`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add medecin', 7, 'add_medecin'),
(26, 'Can change medecin', 7, 'change_medecin'),
(27, 'Can delete medecin', 7, 'delete_medecin'),
(28, 'Can view medecin', 7, 'view_medecin'),
(29, 'Can add horaire', 8, 'add_horaire'),
(30, 'Can change horaire', 8, 'change_horaire'),
(31, 'Can delete horaire', 8, 'delete_horaire'),
(32, 'Can view horaire', 8, 'view_horaire'),
(33, 'Can add utilisateur', 9, 'add_utilisateur'),
(34, 'Can change utilisateur', 9, 'change_utilisateur'),
(35, 'Can delete utilisateur', 9, 'delete_utilisateur'),
(36, 'Can view utilisateur', 9, 'view_utilisateur'),
(37, 'Can add reservation', 10, 'add_reservation'),
(38, 'Can change reservation', 10, 'change_reservation'),
(39, 'Can delete reservation', 10, 'delete_reservation'),
(40, 'Can view reservation', 10, 'view_reservation'),
(41, 'Can add horaire medecin', 11, 'add_horairemedecin'),
(42, 'Can change horaire medecin', 11, 'change_horairemedecin'),
(43, 'Can delete horaire medecin', 11, 'delete_horairemedecin'),
(44, 'Can view horaire medecin', 11, 'view_horairemedecin'),
(45, 'Can add grade', 12, 'add_grade'),
(46, 'Can change grade', 12, 'change_grade'),
(47, 'Can delete grade', 12, 'delete_grade'),
(48, 'Can view grade', 12, 'view_grade'),
(49, 'Can add specialization', 13, 'add_specialization'),
(50, 'Can change specialization', 13, 'change_specialization'),
(51, 'Can delete specialization', 13, 'delete_specialization'),
(52, 'Can view specialization', 13, 'view_specialization');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(8, 'horaire', 'horaire'),
(11, 'horaireMedecin', 'horairemedecin'),
(12, 'medecin', 'grade'),
(7, 'medecin', 'medecin'),
(13, 'medecin', 'specialization'),
(10, 'reservation', 'reservation'),
(6, 'sessions', 'session'),
(9, 'utilisateur', 'utilisateur');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2024-03-14 16:10:03.369432'),
(2, 'auth', '0001_initial', '2024-03-14 16:10:07.664810'),
(3, 'admin', '0001_initial', '2024-03-14 16:10:08.582635'),
(4, 'admin', '0002_logentry_remove_auto_add', '2024-03-14 16:10:08.607186'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2024-03-14 16:10:08.618050'),
(6, 'contenttypes', '0002_remove_content_type_name', '2024-03-14 16:10:09.091856'),
(7, 'auth', '0002_alter_permission_name_max_length', '2024-03-14 16:10:09.435982'),
(8, 'auth', '0003_alter_user_email_max_length', '2024-03-14 16:10:09.623201'),
(9, 'auth', '0004_alter_user_username_opts', '2024-03-14 16:10:09.646888'),
(10, 'auth', '0005_alter_user_last_login_null', '2024-03-14 16:10:09.956303'),
(11, 'auth', '0006_require_contenttypes_0002', '2024-03-14 16:10:09.973365'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2024-03-14 16:10:09.992874'),
(13, 'auth', '0008_alter_user_username_max_length', '2024-03-14 16:10:10.187779'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2024-03-14 16:10:10.387981'),
(15, 'auth', '0010_alter_group_name_max_length', '2024-03-14 16:10:10.586289'),
(16, 'auth', '0011_update_proxy_permissions', '2024-03-14 16:10:10.610036'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2024-03-14 16:10:10.808652'),
(18, 'sessions', '0001_initial', '2024-03-14 16:10:11.162832'),
(19, 'medecin', '0001_initial', '2024-03-14 18:55:48.757752'),
(20, 'horaire', '0001_initial', '2024-03-14 18:55:49.211503'),
(21, 'utilisateur', '0001_initial', '2024-03-14 18:55:52.057467'),
(22, 'reservation', '0001_initial', '2024-03-14 18:55:52.189334'),
(23, 'reservation', '0002_initial', '2024-03-14 18:55:52.898307'),
(24, 'horaire', '0002_remove_horaire_matricule', '2024-03-15 07:50:11.911423'),
(25, 'horaireMedecin', '0001_initial', '2024-03-15 07:50:12.741339'),
(26, 'medecin', '0002_medecin_photo', '2024-04-13 16:19:36.473520'),
(27, 'utilisateur', '0002_utilisateur_userphoto', '2024-04-13 16:51:37.417360'),
(28, 'medecin', '0003_grade_specialization_medecin_grade_and_more', '2024-04-14 21:31:45.310666'),
(29, 'medecin', '0004_medecin_tarif', '2024-04-15 14:31:00.150226'),
(30, 'horaire', '0003_remove_horaire_debaprem_remove_horaire_debmatin_and_more', '2024-04-15 19:04:23.695068'),
(31, 'medecin', '0005_remove_medecin_specialite', '2024-04-15 19:04:23.915474'),
(32, 'horaire', '0004_remove_horaire_jour', '2024-04-17 14:58:15.837462'),
(33, 'horaire', '0005_alter_horaire_debut_alter_horaire_fin', '2024-04-17 15:24:33.710162'),
(34, 'horaireMedecin', '0002_horairemedecin_libre', '2024-04-17 15:24:34.042182'),
(35, 'horaire', '0006_alter_horaire_debut_alter_horaire_fin', '2024-04-23 10:36:01.049261'),
(36, 'medecin', '0006_alter_medecin_photo', '2024-04-23 10:36:01.223669'),
(37, 'utilisateur', '0003_remove_utilisateur_first_name_and_more', '2024-04-23 10:36:01.754903'),
(38, 'horaire', '0007_alter_horaire_debut_alter_horaire_fin', '2024-05-06 18:21:51.751422'),
(39, 'reservation', '0003_reservation_horairemedecinid', '2024-05-07 07:02:22.926163'),
(40, 'horaireMedecin', '0003_alter_horairemedecin_libre', '2024-05-07 21:16:11.971418'),
(41, 'medecin', '0007_remove_medecin_prenom', '2024-06-04 14:37:31.605719');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('1cnhbrvjwfz3lbl9mq6dnuo0h3a0iej3', '.eJxVjEEOwiAQRe_C2pAWZhhw6d4zEGBAqoYmpV0Z765NutDtf-_9l_BhW6vfel78xOIstDj9bjGkR2474Htot1mmua3LFOWuyIN2eZ05Py-H-3dQQ6_fWqFWoypkCFWJbMkhlbFoSDnGBIBoTc7W2gJkWLEbWIMLagBKhBDE-wPIvTc0:1rzCQq:1BOvmVx_a_uowYeJh8qA6wZn9deE16yagHtxwQhfe8M', '2024-05-07 09:27:20.920684'),
('xuxlr7jyebwoog6qy2zoewidg6qoe2s2', '.eJxVjEEOwiAQRe_C2pAWZhhw6d4zEGBAqoYmpV0Z765NutDtf-_9l_BhW6vfel78xOIstDj9bjGkR2474Htot1mmua3LFOWuyIN2eZ05Py-H-3dQQ6_fWqFWoypkCFWJbMkhlbFoSDnGBIBoTc7W2gJkWLEbWIMLagBKhBDE-wPIvTc0:1rwO9s:7LeDkjYZwgDf2S2IP1u3iWTk1w3RCs-xxUi4lxWwbpY', '2024-04-29 15:22:12.157646');

-- --------------------------------------------------------

--
-- Table structure for table `horaireMedecin_horairemedecin`
--

CREATE TABLE `horaireMedecin_horairemedecin` (
  `HoraireMedecinID` int(11) NOT NULL,
  `horaireID_id` int(11) DEFAULT NULL,
  `matricule_id` varchar(50) DEFAULT NULL,
  `libre` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `horaireMedecin_horairemedecin`
--

INSERT INTO `horaireMedecin_horairemedecin` (`HoraireMedecinID`, `horaireID_id`, `matricule_id`, `libre`) VALUES
(23, 21, '101010', 0),
(24, 22, '1111', 0),
(25, 23, '123432', 0),
(26, 24, '22222', 0),
(27, 25, '333333', 1),
(28, 26, '44444', 1),
(29, 27, '55555', 1),
(30, 28, '66666', 1),
(31, 29, '777777', 0),
(32, 30, '88888', 1),
(33, 31, '99999', 1),
(34, 32, '1111', 1),
(35, 33, '123432', 1),
(36, 34, '22222', 1);

-- --------------------------------------------------------

--
-- Table structure for table `horaire_horaire`
--

CREATE TABLE `horaire_horaire` (
  `horaireID` int(11) NOT NULL,
  `debut` datetime(6) DEFAULT NULL,
  `fin` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `horaire_horaire`
--

INSERT INTO `horaire_horaire` (`horaireID`, `debut`, `fin`) VALUES
(21, '2024-05-20 07:00:00.000000', '2024-05-20 08:00:00.000000'),
(22, '2024-05-21 08:00:00.000000', '2024-05-21 09:00:00.000000'),
(23, '2024-05-22 07:00:00.000000', '2024-05-22 08:00:00.000000'),
(24, '2024-06-01 07:00:00.000000', '2024-06-01 09:00:00.000000'),
(25, '2024-06-06 10:00:00.000000', '2024-06-06 11:00:00.000000'),
(26, '2024-06-08 07:00:00.000000', '2024-06-08 10:00:00.000000'),
(27, '2024-06-07 10:30:00.000000', '2024-06-07 11:45:00.000000'),
(28, '2024-06-07 13:30:00.000000', '2024-05-20 15:00:00.000000'),
(29, '2024-06-05 07:00:00.000000', '2024-06-05 09:00:00.000000'),
(30, '2024-06-10 14:00:00.000000', '2024-06-10 15:00:00.000000'),
(31, '2024-06-10 07:00:00.000000', '2024-06-10 08:30:00.000000'),
(32, '2024-06-12 08:00:00.000000', '2024-06-10 09:30:00.000000'),
(33, '2024-06-14 10:00:00.000000', '2024-06-14 11:00:00.000000'),
(34, '2024-06-15 07:40:00.000000', '2024-06-15 08:45:00.000000');

-- --------------------------------------------------------

--
-- Table structure for table `medecin_grade`
--

CREATE TABLE `medecin_grade` (
  `id` bigint(20) NOT NULL,
  `nomGrade` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medecin_grade`
--

INSERT INTO `medecin_grade` (`id`, `nomGrade`) VALUES
(1, 'Generaliste'),
(3, 'Professeur'),
(2, 'Specialiste');

-- --------------------------------------------------------

--
-- Table structure for table `medecin_medecin`
--

CREATE TABLE `medecin_medecin` (
  `matricule` varchar(50) NOT NULL,
  `nom` varchar(25) NOT NULL,
  `mail` varchar(254) NOT NULL,
  `cabinet` varchar(25) NOT NULL,
  `Photo` varchar(100) NOT NULL,
  `grade_id` bigint(20) DEFAULT NULL,
  `specialization_id` bigint(20) DEFAULT NULL,
  `tarif` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medecin_medecin`
--

INSERT INTO `medecin_medecin` (`matricule`, `nom`, `mail`, `cabinet`, `Photo`, `grade_id`, `specialization_id`, `tarif`) VALUES
('101010', 'Dr Hedvig Hricak', 'hedvig@gmail.com', 'B5', 'medecin_photos/d0727ecb94c1353d2c12.jpeg', 2, 8, 345600),
('1111', 'Dr Valentin Fuster', 'valentin@gmail.com', 'A1', 'medecin_photos/fuster.jpg', 2, 5, 100000),
('123432', 'Dr Atul Gawande', 'atul@gmail.com', 'B6', 'medecin_photos/gawande_atul_download_1.jpg', 1, NULL, 245000),
('22222', 'Dr Eugene Braunwald', 'eugene@gmail.com', 'A2', 'medecin_photos/EUGENE.jpg', 2, 5, 250000),
('333333', 'Dr Howard Murad', 'howard@gmail.com', 'A3', 'medecin_photos/393ccf232eeba2c1aca5c27106150ff3_XL.jpg', 2, 6, 125500),
('44444', 'Dr Albert Kligman', 'albert@gmail.com', 'A4', 'medecin_photos/0c6de663-cf5b-4a51-8dfc-1ec389e04a96.sized-1000x1000.jpeg', 2, 6, 100000),
('55555', 'Dr Oliver Sacks', 'olivier@gmail.com', 'A5', 'medecin_photos/AVT_Oliver-Sacks_589.webp', 2, 7, 250000),
('66666', 'Dr Stanley Prusiner', 'stanley@gmail.com', 'B1', 'medecin_photos/Stanley-Prusiner.jpg', 2, 7, 400000),
('777777', 'Dr Sidney Farber', 'sidney@gmail.com', 'B2', 'medecin_photos/PF_Young-Farber.jpg', 2, 9, 312500),
('88888', 'Dr Harold Varmus', 'harold@gmail.com', 'B3', 'medecin_photos/csm_harold_Varmus-444_d2be21b52e.png', 2, 9, 350000),
('99999', 'Dr Charles Dotter', 'charles@gmail.com', 'B4', 'medecin_photos/58df92f4ecaa8472e61ad438dd1128b4.webp', 2, 8, 100000);

-- --------------------------------------------------------

--
-- Table structure for table `medecin_specialization`
--

CREATE TABLE `medecin_specialization` (
  `id` bigint(20) NOT NULL,
  `specialite` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medecin_specialization`
--

INSERT INTO `medecin_specialization` (`id`, `specialite`) VALUES
(5, 'Cardiologue'),
(6, 'Dermatologue'),
(7, 'Neurologue'),
(9, 'Oncologue'),
(8, 'Radiologue');

-- --------------------------------------------------------

--
-- Table structure for table `reservation_reservation`
--

CREATE TABLE `reservation_reservation` (
  `reservationID` int(11) NOT NULL,
  `dateHeure` datetime(6) NOT NULL,
  `id_id` bigint(20) DEFAULT NULL,
  `matricule_id` varchar(50) DEFAULT NULL,
  `HoraireMedecinID_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservation_reservation`
--

INSERT INTO `reservation_reservation` (`reservationID`, `dateHeure`, `id_id`, `matricule_id`, `HoraireMedecinID_id`) VALUES
(19, '2024-05-20 07:00:00.000000', 1, '101010', 23),
(20, '2024-05-21 08:00:00.000000', 8, '1111', 24),
(21, '2024-05-22 07:00:00.000000', 9, '123432', 25),
(22, '2024-06-01 07:00:00.000000', 1, '22222', 26),
(23, '2024-06-05 07:00:00.000000', 8, '777777', 31);

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur_utilisateur`
--

CREATE TABLE `utilisateur_utilisateur` (
  `id` bigint(20) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `contact` varchar(30) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `UserPhoto` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `utilisateur_utilisateur`
--

INSERT INTO `utilisateur_utilisateur` (`id`, `password`, `last_login`, `is_superuser`, `username`, `email`, `contact`, `is_active`, `is_staff`, `UserPhoto`) VALUES
(1, 'pbkdf2_sha256$720000$UDxfK5JrSc6qJRaGjrJp19$P5mt//B47yOF4omVOzatO+QQE6UkjkqZJSQGxIizB38=', NULL, 0, 'Zuckerberg', 'zuckerberg@gmail.com', '0345678912', 1, 0, 'patient_photos/zuck.webp'),
(8, 'pbkdf2_sha256$720000$m8lBi4TkYdOG9LEeNXOuIw$0w0oUvWCWtS+VDWwB7aNtXEdDYRAKvxfx/6Vr9VFu8E=', NULL, 0, 'Bill Gates', 'bill@gmail.com', '0345432123', 1, 0, 'patient_photos/Gates-1000.jpg'),
(9, 'pbkdf2_sha256$720000$ypnh7hjCLa59oJiwGXYlVv$Zz03cFUHQA3U8+3Ctc+NTf06EQnmFDz1CvzNY6zBmSk=', NULL, 0, 'Steve Jobs', 'steve@gmail.com', '0321234544', 1, 0, 'patient_photos/steve.jpg'),
(10, 'pbkdf2_sha256$720000$L5OrD8qwJSE673MaQYzm6P$DDaDEp4Z7bQ5kCOXYeRr6lF0VVa6Ij6CI+tsG6834WY=', NULL, 1, 'Mr Rabe', 'rabe@gmail.com', '0387654311', 1, 1, 'patient_photos/directeur-general.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur_utilisateur_groups`
--

CREATE TABLE `utilisateur_utilisateur_groups` (
  `id` bigint(20) NOT NULL,
  `utilisateur_id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur_utilisateur_user_permissions`
--

CREATE TABLE `utilisateur_utilisateur_user_permissions` (
  `id` bigint(20) NOT NULL,
  `utilisateur_id` bigint(20) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `horaireMedecin_horairemedecin`
--
ALTER TABLE `horaireMedecin_horairemedecin`
  ADD PRIMARY KEY (`HoraireMedecinID`),
  ADD KEY `horaireMedecin_horai_horaireID_id_d8b507d9_fk_horaire_h` (`horaireID_id`),
  ADD KEY `horaireMedecin_horai_matricule_id_7ee3f74a_fk_medecin_m` (`matricule_id`);

--
-- Indexes for table `horaire_horaire`
--
ALTER TABLE `horaire_horaire`
  ADD PRIMARY KEY (`horaireID`);

--
-- Indexes for table `medecin_grade`
--
ALTER TABLE `medecin_grade`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nomGrade` (`nomGrade`);

--
-- Indexes for table `medecin_medecin`
--
ALTER TABLE `medecin_medecin`
  ADD PRIMARY KEY (`matricule`),
  ADD KEY `medecin_medecin_grade_id_c86b5d26_fk_medecin_grade_id` (`grade_id`),
  ADD KEY `medecin_medecin_specialization_id_7045b033_fk_medecin_s` (`specialization_id`);

--
-- Indexes for table `medecin_specialization`
--
ALTER TABLE `medecin_specialization`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `specialite` (`specialite`);

--
-- Indexes for table `reservation_reservation`
--
ALTER TABLE `reservation_reservation`
  ADD PRIMARY KEY (`reservationID`),
  ADD KEY `reservation_reservat_id_id_910f42ac_fk_utilisate` (`id_id`),
  ADD KEY `reservation_reservat_matricule_id_b0df15b7_fk_medecin_m` (`matricule_id`),
  ADD KEY `reservation_reservat_HoraireMedecinID_id_e4c02f86_fk_horaireMe` (`HoraireMedecinID_id`);

--
-- Indexes for table `utilisateur_utilisateur`
--
ALTER TABLE `utilisateur_utilisateur`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `utilisateur_utilisateur_groups`
--
ALTER TABLE `utilisateur_utilisateur_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `utilisateur_utilisateur__utilisateur_id_group_id_f6666e2f_uniq` (`utilisateur_id`,`group_id`),
  ADD KEY `utilisateur_utilisat_group_id_73c9927f_fk_auth_grou` (`group_id`);

--
-- Indexes for table `utilisateur_utilisateur_user_permissions`
--
ALTER TABLE `utilisateur_utilisateur_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `utilisateur_utilisateur__utilisateur_id_permissio_500c8d2f_uniq` (`utilisateur_id`,`permission_id`),
  ADD KEY `utilisateur_utilisat_permission_id_cadf1c64_fk_auth_perm` (`permission_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `horaireMedecin_horairemedecin`
--
ALTER TABLE `horaireMedecin_horairemedecin`
  MODIFY `HoraireMedecinID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `horaire_horaire`
--
ALTER TABLE `horaire_horaire`
  MODIFY `horaireID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `medecin_grade`
--
ALTER TABLE `medecin_grade`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `medecin_specialization`
--
ALTER TABLE `medecin_specialization`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `reservation_reservation`
--
ALTER TABLE `reservation_reservation`
  MODIFY `reservationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `utilisateur_utilisateur`
--
ALTER TABLE `utilisateur_utilisateur`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `utilisateur_utilisateur_groups`
--
ALTER TABLE `utilisateur_utilisateur_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `utilisateur_utilisateur_user_permissions`
--
ALTER TABLE `utilisateur_utilisateur_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `horaireMedecin_horairemedecin`
--
ALTER TABLE `horaireMedecin_horairemedecin`
  ADD CONSTRAINT `horaireMedecin_horai_horaireID_id_d8b507d9_fk_horaire_h` FOREIGN KEY (`horaireID_id`) REFERENCES `horaire_horaire` (`horaireID`),
  ADD CONSTRAINT `horaireMedecin_horai_matricule_id_7ee3f74a_fk_medecin_m` FOREIGN KEY (`matricule_id`) REFERENCES `medecin_medecin` (`matricule`);

--
-- Constraints for table `medecin_medecin`
--
ALTER TABLE `medecin_medecin`
  ADD CONSTRAINT `medecin_medecin_grade_id_c86b5d26_fk_medecin_grade_id` FOREIGN KEY (`grade_id`) REFERENCES `medecin_grade` (`id`),
  ADD CONSTRAINT `medecin_medecin_specialization_id_7045b033_fk_medecin_s` FOREIGN KEY (`specialization_id`) REFERENCES `medecin_specialization` (`id`);

--
-- Constraints for table `reservation_reservation`
--
ALTER TABLE `reservation_reservation`
  ADD CONSTRAINT `reservation_reservat_HoraireMedecinID_id_e4c02f86_fk_horaireMe` FOREIGN KEY (`HoraireMedecinID_id`) REFERENCES `horaireMedecin_horairemedecin` (`HoraireMedecinID`),
  ADD CONSTRAINT `reservation_reservat_id_id_910f42ac_fk_utilisate` FOREIGN KEY (`id_id`) REFERENCES `utilisateur_utilisateur` (`id`),
  ADD CONSTRAINT `reservation_reservat_matricule_id_b0df15b7_fk_medecin_m` FOREIGN KEY (`matricule_id`) REFERENCES `medecin_medecin` (`matricule`);

--
-- Constraints for table `utilisateur_utilisateur_groups`
--
ALTER TABLE `utilisateur_utilisateur_groups`
  ADD CONSTRAINT `utilisateur_utilisat_group_id_73c9927f_fk_auth_grou` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `utilisateur_utilisat_utilisateur_id_7f906dff_fk_utilisate` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur_utilisateur` (`id`);

--
-- Constraints for table `utilisateur_utilisateur_user_permissions`
--
ALTER TABLE `utilisateur_utilisateur_user_permissions`
  ADD CONSTRAINT `utilisateur_utilisat_permission_id_cadf1c64_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `utilisateur_utilisat_utilisateur_id_c5dd5b38_fk_utilisate` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur_utilisateur` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
