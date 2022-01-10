-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2022 at 04:40 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_store`
--
CREATE DATABASE IF NOT EXISTS `db_store` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_store`;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`) VALUES
('admin', 'sha1$15614583$1$c797bcf080e3f41634970908ff1b3ccdf88d30b8');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_cart` int(25) NOT NULL,
  `id_user` int(25) NOT NULL,
  `id` int(25) NOT NULL,
  `quantity` int(25) NOT NULL,
  `total_harga` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id_cart`, `id_user`, `id`, `quantity`, `total_harga`) VALUES
(7, 2, 5, 1, 25000),
(12, 1, 9, 5, 1250000);

-- --------------------------------------------------------

--
-- Table structure for table `orderuser`
--

CREATE TABLE `orderuser` (
  `id_order` int(25) NOT NULL,
  `id_user` int(25) NOT NULL,
  `id` int(25) NOT NULL,
  `quantity` int(255) NOT NULL,
  `total_harga` int(255) NOT NULL,
  `status` enum('Menunggu Konfirmasi','Diproses','Dikirim','Diterima') NOT NULL DEFAULT 'Menunggu Konfirmasi'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderuser`
--

INSERT INTO `orderuser` (`id_order`, `id_user`, `id`, `quantity`, `total_harga`, `status`) VALUES
(5, 1, 3, 3, 900000, 'Dikirim'),
(6, 1, 4, 1, 15000, 'Diterima'),
(7, 1, 1, 3, 7500000, 'Diterima'),
(11, 1, 10, 5, 2500000, 'Diproses'),
(12, 1, 2, 2, 900000, 'Menunggu Konfirmasi');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(25) NOT NULL,
  `nama_product` varchar(255) NOT NULL,
  `harga` int(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `kategori` enum('Tanaman Hias','Bibit Tanaman Hias') NOT NULL,
  `foto` varchar(255) NOT NULL,
  `popular` enum('Yes','No') NOT NULL DEFAULT 'No'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `nama_product`, `harga`, `keterangan`, `kategori`, `foto`, `popular`) VALUES
(1, 'Philodendron White Wizard', 2500000, 'Tanaman ini adalah tanaman hias', 'Tanaman Hias', 'whitewizard.jpg', 'Yes'),
(2, 'Anthurium Silver Hope', 450000, 'Tanaman ini adalah tanaman hias', 'Tanaman Hias', 'silverhope.jpg', 'Yes'),
(3, 'Syngonium Yellow', 300000, 'Tanaman ini adalah tanaman hias', 'Tanaman Hias', 'YellowVarie.jpg', 'Yes'),
(4, 'Bibit Bunga Matahari', 15000, 'Bibit Bunga Matahari', 'Bibit Tanaman Hias', 'benihmatahari.png', 'Yes'),
(5, 'Anthurium Ace of Spades', 1000000, 'Tanaman ini adalah tanaman hias', 'Tanaman Hias', 'AnthuAce.jpg', 'No'),
(6, 'Anthurium Silver Blush', 250000, 'Tanaman ini adalah Silver Blush', 'Tanaman Hias', 'silverblush.jpg', 'No'),
(7, 'Sirih Aristolocia Leuceunora', 600000, 'Tanaman ini berjenis tanaman Sirih', 'Tanaman Hias', 'sirih.jpg', 'No'),
(8, 'Anthurium Dorayaki Silver', 200000, 'Tanaman ini memiliki daun yang  berbentuk seperti dorayaki', 'Tanaman Hias', 'dorayaki.jpg', 'No'),
(9, 'Anthurium Dressleri Hybrid', 250000, 'Jenis tanaman anthurium yang hybrid', 'Tanaman Hias', 'hybrid.jpg', 'No'),
(10, 'Monstera Andansoni Variegata', 500000, 'Tanaman yang daun nya bolong-bolong', 'Tanaman Hias', 'Mons.jpg', 'No'),
(11, 'Bibit Bunga California', 12000, 'Ini adalah bibit bunga', 'Bibit Tanaman Hias', 'bibitbunga.jpeg', 'No'),
(12, 'Anthurium Warocqueanum', 1100000, 'Tanaman ini Berjenis Anthurium', 'Tanaman Hias', 'waro.jpeg', 'No'),
(15, 'Bibit Bunga Petunia', 12000, 'Bibit ini adalah bibit bunga petunia', 'Bibit Tanaman Hias', 'haira-seed-bunga-petunia.jpg', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(25) NOT NULL,
  `nama_user` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `jenis_kelamin` enum('Pria','Wanita') NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_tlp` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `nama_user`, `email`, `jenis_kelamin`, `alamat`, `no_tlp`, `password`) VALUES
(1, 'Bintang Aditya', 'bintangaditya676@gmail.com', 'Pria', 'Bogor', '089634715825', 'sha1$c6d2b25d$1$b059fed690ebb9df6a03be477cba6b6b38316255'),
(2, 'Aditya Bintanga', 'bintangaditya676@gmail.coma', 'Pria', 'aan', '089634715823', 'sha1$8a1899a2$1$1097bfb2d8e1eb1959c7dd76767126013cf23958');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id_wishlist` int(25) NOT NULL,
  `id_user` int(25) NOT NULL,
  `id` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id_wishlist`, `id_user`, `id`) VALUES
(58, 1, 3),
(60, 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`),
  ADD KEY `id_user` (`id_user`) USING BTREE,
  ADD KEY `id` (`id`);

--
-- Indexes for table `orderuser`
--
ALTER TABLE `orderuser`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id_wishlist`),
  ADD KEY `id` (`id`),
  ADD KEY `wishlist_ibfk_2` (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id_cart` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `orderuser`
--
ALTER TABLE `orderuser`
  MODIFY `id_order` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id_wishlist` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderuser`
--
ALTER TABLE `orderuser`
  ADD CONSTRAINT `orderuser_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderuser_ibfk_2` FOREIGN KEY (`id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
