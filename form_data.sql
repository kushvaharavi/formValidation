-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2017 at 08:05 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `form_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `form_data`
--

CREATE TABLE `form_data` (
  `id` int(40) NOT NULL,
  `fname` varchar(40) NOT NULL,
  `lname` varchar(40) NOT NULL,
  `gender` varchar(40) NOT NULL,
  `dob` date NOT NULL,
  `city` varchar(40) NOT NULL,
  `phone` int(10) NOT NULL,
  `pin` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `form_data`
--

INSERT INTO `form_data` (`id`, `fname`, `lname`, `gender`, `dob`, `city`, `phone`, `pin`) VALUES
(1, 'RRK', 'RANJAN', 'Male', '1994-11-01', 'BANGALORE', 2147483647, 560076),
(2, 'Ravi', 'Kushvaha', 'Male', '1994-10-01', 'Jehanabad', 2147483647, 804417),
(3, 'Ravi', 'Kushvaha', 'Male', '1994-10-01', 'Jehanabad', 2147483647, 804417),
(4, 'Ravi', 'Kushvaha', 'Male', '1990-01-01', 'Jehanabad', 2147483647, 804417),
(5, 'Ravi', 'Kushvaha', 'Male', '1991-02-06', 'Jehanabad', 2147483647, 804417),
(6, 'Ravi', 'Kushvaha', 'Male', '1991-02-06', 'Jehanabad', 2147483647, 804417),
(7, 'Ravi', 'Kushvaha', 'Male', '1991-02-06', 'Jehanabad', 2147483647, 804417),
(8, 'Ravi', 'Kushvaha', 'Male', '1991-02-06', 'Jehanabad', 2147483647, 804417),
(9, 'Ravi', 'Kushvaha', 'Male', '1991-02-06', 'Jehanabad', 2147483647, 804417),
(10, 'Ravi', 'Kushvaha', 'Male', '1991-02-06', 'Jehanabad', 2147483647, 804417);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `form_data`
--
ALTER TABLE `form_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `form_data`
--
ALTER TABLE `form_data`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
