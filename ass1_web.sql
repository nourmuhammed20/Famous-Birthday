-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2023 at 06:11 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ass1_web`
--

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `password_confirm` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `name`, `username`, `password`, `password_confirm`, `email`, `phone`, `address`, `birthday`, `image`) VALUES
(1, 'nour', 'admin', 'nour', 'nour', 'admin@gmail.com', '111335660', '29 ش احمد حسني ، المنطقة الأولي مدينة نصر', '2023-04-12', 'Screenshot 2023-02-08 204735.png'),
(3, 'test', 'test', '', '', 'Nour_exe@gmail.com', '+201113356660', '29 ahmed housny , nasr city , cairo', '2023-04-05', NULL),
(4, 'test', 'test1', '', '', 'Nour_exe@gmail.com', '+201113356660', '29 ahmed housny , nasr city , cairo', '2023-04-05', 'white logo.png'),
(7, 'test', 'test2', 'test2', 'test2', 'Nour_exe@gmail.com', '+201113356660', '29 ahmed housny , nasr city , cairo', '2023-04-05', 'black logo.png'),
(8, 'sasmy', '20200605', 'test', 'test', 'test1@gmial.com', NULL, '29 ahmed housny , nasr city , cairo', '2023-04-27', 'Screenshot 2023-04-14 015952.png'),
(9, 'sasmy', '202006052', 't', 't', 'test1@gmial.com', NULL, '29 ahmed housny , nasr city , cairo', '2023-04-27', 'Screenshot 2023-04-14 015952.png'),
(11, 'sasmy', '2020060523', 'test', 'test', 'test1@gmial.com', NULL, '29 ahmed housny , nasr city , cairo', '2023-04-01', 'Screenshot 2023-04-14 015952.png'),
(12, 'sasmy', '20200605233', '1', '1', 'test1@gmial.com', NULL, '29 ahmed housny , nasr city , cairo', '2023-04-01', 'Screenshot 2023-04-14 015952.png'),
(13, '', '', '', '', '', '', 'adssadasd23', '0002-03-31', 'Screenshot 2023-04-14 015952.png'),
(19, 'sasmy', 'admin62', 'Nour123#', 'Nour123#', 'admin@gmail.com', '01255563589', '29 ahmed housny , nasr city , cairo', '2023-04-10', '242635622_4288919901177247_8325403312482811461_n.jpg'),
(20, 'nour', 'admin233', 'Nour123#', 'Nour123#', 'nour@gmail.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2014-04-14', '242635622_4288919901177247_8325403312482811461_n.jpg'),
(21, 'nour', 'admin2', 'Nour123#', 'Nour123#', 'nour@gmail.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-14', 'Screenshot 2023-02-08 204735.png'),
(22, 'test', 'test231', 'Nour123#', 'Nour123#', 'nour@gmail.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-25', 'Screenshot 2023-04-14 143020.png'),
(32, 'Nour', 'Tarek123#', 'Tarek123#', 'Tarek123#', 'misyeheh@gmail.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-05', 'white logo.png'),
(33, 'Nour', 'Tarek1234#', 'Tarek1234#', 'Tarek1234#', 'misyeheh@gmail.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-15', 'black logo.png'),
(34, 'Nour', 'Nour1234#', 'Nour1234#', 'Nour1234#', 'misyeheh@gmail.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-27', 'gradient logo.png'),
(35, 'Nour', 'Zein123#', 'Zein123#', 'Zein123#', 'misyeheh@gmail.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-15', 'white logo.png'),
(36, 'Nour', 'test12', 'Nour123#', 'Nour123#', 'test1@gmial.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-02', 'Free_Shopping_Bag_Mockup_1.png'),
(37, 'Nour', 'Test234#', 'Test234#', 'Test234#', 'test1@gmial.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-18', 'coffee-bean-cafe-breakfast-computer-icons-png-favpng-6hVWJt8gR5mSHUKJC5cT0ZtZX.jpg'),
(38, 'Nour', 'Nour123#', 'Nour123#', 'Nour123#', 'misyeheh@gmail.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-03', 'CoffeeLogo.png'),
(39, 'Nour', 'Admin12#', 'Admin12#', 'Admin12#', 'test1@gmial.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-15', 'coffee-bean-cafe-breakfast-computer-icons-png-favpng-6hVWJt8gR5mSHUKJC5cT0ZtZX.jpg'),
(40, 'Nour', 'Nour12345#', 'Nour12345#', 'Nour12345#', 'test1@gmial.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-04', 'CoffeeLogo_final.png'),
(42, 'Nour', 'Nour123456#', 'Nour123456#', 'Nour123456#', 'test1@gmial.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-15', 'CoffeeLogo.jpg'),
(43, 'Muhamed', 'Samy', '123456789M!', '123456789M!', 'ss@gmail.com', '01234667896', 'wwww', '2001-02-09', NULL),
(53, 'a1', 'jkbk', 'm k ', 'm k ', 'ss@gmail.', '01234667896', 'wwww', '2023-04-28', 'smoke-steam-icon-vector-18202455.jpg'),
(54, 'ss', '23', 'test2', 'test2', 'test2', 'sda', 'asd', '2023-04-19', 'smoke-steam-icon-vector-18202455.jpg'),
(55, 'sdsad', 'S2sd@1sda', 'S2sd@1sda', 'S2sd@1sda', 'ss@gmail.com', '01234667896', 'wwww', '2023-04-20', 'download.png'),
(57, 'sadasd23', '2323sad', 'sad', 'sad', 'sad', 'dsaasd', 'sad', '2023-04-24', 'download.png'),
(58, 'sdsad', 'smsm123#', 'smsm123#', 'smsm123#', 'ss@gmail.com', '01234667896', 'wwww', '2023-02-13', 'smoke-steam-icon-vector-18202455.jpg'),
(59, 'sdsad', 'admin23@', 'admin23@', 'admin23@', 'ss@gmail.com', '01234667896', 'wwww', '2023-04-04', 'coffee-bean-cafe-breakfast-computer-icons-png-favpng-6hVWJt8gR5mSHUKJC5cT0ZtZX.jpg'),
(60, 'Nour', 'admin22#', 'admin22#', 'admin22#', 'xadigin521@raotuso', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-01', 'smoke-steam-icon-vector-18202455.jpg'),
(61, 'Nour', 'n20200605@', 'n20200605@', 'n20200605@', 'xadigin521@raotuso.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-01', 'smoke-steam-icon-vector-18202455.jpg'),
(62, 'Nour', 'Nour123##', 'Nour123##', 'Nour123##', 'xadigin521@raotuso.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-01', 'coffee-bean-cafe-breakfast-computer-icons-png-favpng-6hVWJt8gR5mSHUKJC5cT0ZtZX.jpg'),
(63, 'Nour', '20200605N@', '20200605N@', '20200605N@', 'xadigin521@raotuso.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-01', 'coffee-bean-cafe-breakfast-computer-icons-png-favpng-6hVWJt8gR5mSHUKJC5cT0ZtZX.jpg'),
(64, 'Nour', 'Nour1234##', 'Nour1234##', 'Nour1234##', 'xadigin521@raotuso.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-01', 'CoffeeLogo.jpg'),
(65, 'Nour', 'NOur1234@$', 'NOur1234@$', 'NOur1234@$', 'xadigin521@raotuso.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-08', 'download.png'),
(66, 'Nour', '20200605@@S', '20200605@@S', '20200605@@S', 'xadigin521@raotuso.com', '01224444456', '29 ahmed housny , nasr city , cairo', '2023-04-07', 'download.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
