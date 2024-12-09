-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2024 at 05:20 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wo_travel`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `price` varchar(30) NOT NULL,
  `num_days` int(10) NOT NULL,
  `country_id` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `image`, `price`, `num_days`, `country_id`, `created_at`, `updated_at`) VALUES
(1, 'Zeneva', 'deals-02.jpg', '400', 7, 1, '2024-12-02 13:30:25', '2024-12-02 13:30:25'),
(2, 'Paris', 'country-03.jpg', '500', 8, 2, '2024-12-02 13:30:25', '2024-12-02 13:30:25'),
(3, 'Zurich', 'deals-03.jpg', '300', 8, 1, '2024-12-02 13:30:25', '2024-12-02 13:30:25'),
(4, 'Love city', 'country-02.jpg', '450', 8, 2, '2024-12-02 13:30:25', '2024-12-02 13:30:25');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `population` varchar(30) NOT NULL,
  `territory` varchar(30) NOT NULL,
  `avg_price` int(20) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(200) NOT NULL,
  `continent` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `population`, `territory`, `avg_price`, `description`, `image`, `continent`, `created_at`, `updated_at`) VALUES
(1, 'Switzerland', '210.4 M', '350.600km', 456, 'Switzerland officially the French Republic is a country located primarily in Western Europe. Its overseas regions and territories include French Guiana in South America, Saint Pierre and Miquelon in the North Atlantic, the French West Indies, and many islands in Oceania and the Indian Ocean, giving it one of the largest discontiguous exclusive economic zones in the world. Metropolitan France shares borders with Belgium and Luxembourg to the north, Germany to the northeast, Switzerland to the east, Italy and Monaco to the southeast, Andorra and Spain to the south, and a maritime border with the United Kingdom to the northwest. ', 'wo.jpg', 'Europe', '2024-11-26 18:17:18', '2024-11-26 18:17:18'),
(2, 'France', '1233.67M', '12334.67 Km', 435, 'France officially the French Republic,is a country located primarily in Western Europe. Its overseas regions and territories include French Guiana in South America, Saint Pierre and Miquelon in the North Atlantic, the French West Indies, and many islands in Oceania and the Indian Ocean, giving it one of the largest discontiguous exclusive economic zones in the world. Metropolitan France shares borders with Belgium and Luxembourg to the north, Germany to the northeast, Switzerland to the east, Italy and Monaco to the southeast, Andorra and Spain to the south, and a maritime border with the United Kingdom to the northwest. ', 'wo2.jpg', 'Europe', '2024-11-26 18:17:18', '2024-11-26 18:17:18');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `phone_number` int(30) NOT NULL,
  `num_guests` int(20) NOT NULL,
  `check_in_date` varchar(200) NOT NULL,
  `destination` varchar(200) NOT NULL,
  `price` varchar(30) NOT NULL,
  `user_id` int(10) NOT NULL,
  `status` varchar(200) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `name`, `phone_number`, `num_guests`, `check_in_date`, `destination`, `price`, `user_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Jamil Hossain', 1736150454, 2, '2024-12-25', 'Zeneva', '800', 1, 'pending', '2024-12-03 06:21:48', '2024-12-03 06:21:48'),
(2, 'werytergter', 346457, 4, '2024-12-24', 'Zeneva', '1600', 1, 'pending', '2024-12-03 06:22:53', '2024-12-03 06:22:53'),
(3, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 09:46:07', '2024-12-03 09:46:07'),
(4, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:36:17', '2024-12-03 10:36:17'),
(5, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:39:09', '2024-12-03 10:39:09'),
(6, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:41:08', '2024-12-03 10:41:08'),
(7, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:51:49', '2024-12-03 10:51:49'),
(8, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:51:53', '2024-12-03 10:51:53'),
(9, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:52:10', '2024-12-03 10:52:10'),
(10, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:52:16', '2024-12-03 10:52:16'),
(11, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:52:21', '2024-12-03 10:52:21'),
(12, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:52:25', '2024-12-03 10:52:25'),
(13, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:52:51', '2024-12-03 10:52:51'),
(14, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:53:03', '2024-12-03 10:53:03'),
(15, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:54:24', '2024-12-03 10:54:24'),
(16, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:57:55', '2024-12-03 10:57:55'),
(17, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 10:59:23', '2024-12-03 10:59:23'),
(18, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 11:02:33', '2024-12-03 11:02:33'),
(19, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 11:02:41', '2024-12-03 11:02:41'),
(20, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 11:02:59', '2024-12-03 11:02:59'),
(21, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 11:05:04', '2024-12-03 11:05:04'),
(22, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 11:05:46', '2024-12-03 11:05:46'),
(23, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 11:07:12', '2024-12-03 11:07:12'),
(24, 'abir', 235234, 1, '2024-12-19', 'Zurich', '700', 1, 'pending', '2024-12-03 11:07:19', '2024-12-03 11:07:19'),
(25, 'nadir', 2352345, 2, '2024-12-27', 'Paris', '1200', 1, 'pending', '2024-12-03 11:07:54', '2024-12-03 11:07:54'),
(26, 'nadir', 2352345, 2, '2024-12-27', 'Paris', '1200', 1, 'pending', '2024-12-03 11:12:19', '2024-12-03 11:12:19'),
(27, 'nadir', 2352345, 2, '2024-12-27', 'Paris', '1200', 1, 'pending', '2024-12-03 11:23:55', '2024-12-03 11:23:55'),
(28, 'nadir', 2352345, 2, '2024-12-27', 'Paris', '1200', 1, 'pending', '2024-12-03 11:29:27', '2024-12-03 11:29:27'),
(29, 'nadir', 2352345, 2, '2024-12-27', 'Paris', '1200', 1, 'pending', '2024-12-03 11:30:30', '2024-12-03 11:30:30'),
(30, 'fahim', 346457, 1, '2024-12-04', 'Zeneva', '400', 1, 'pending', '2024-12-03 11:35:14', '2024-12-03 11:35:14'),
(31, 'khalid', 124235, 2, '2024-12-20', 'Zeneva', '800', 1, 'pending', '2024-12-03 12:01:30', '2024-12-03 12:01:30'),
(32, 'test', 8764321, 1, '2024-12-17', 'Zeneva', '400', 1, 'pending', '2024-12-03 12:32:22', '2024-12-03 12:32:22'),
(33, 'neew', 345536, 2, '2024-12-26', 'Zeneva', '800', 1, 'pending', '2024-12-03 12:48:15', '2024-12-03 12:48:15'),
(34, 'new', 2342345, 2, '2024-12-11', 'Zurich', '1400', 1, 'pending', '2024-12-03 21:10:19', '2024-12-03 21:10:19'),
(35, 'rakib', 2353464, 2, '2024-12-13', 'Zeneva', '800', 1, 'pending', '2024-12-03 21:40:51', '2024-12-03 21:40:51'),
(36, 'khalid', 345366, 1, '2024-12-13', 'Love city', '600', 1, 'pending', '2024-12-04 06:15:52', '2024-12-04 06:15:52'),
(37, 'asdcascd', 12344, 2, '2024-12-10', 'Zurich', '1400', 1, 'pending', '2024-12-06 07:03:46', '2024-12-06 07:03:46'),
(38, 'wefweds', 1241234, 2, '2024-12-20', 'Zurich', '600', 1, 'pending', '2024-12-06 21:07:08', '2024-12-06 21:07:08'),
(39, 'robot', 235265, 1, '2024-12-27', 'Paris', '500', 1, 'pending', '2024-12-06 21:17:22', '2024-12-06 21:17:22'),
(40, 'test for', 9677764, 1, '2024-12-19', 'Love city', '450', 1, 'pending', '2024-12-07 00:19:54', '2024-12-07 00:19:54'),
(41, 'sumi', 34534, 2, '2024-12-27', 'Love city', '900', 1, 'pending', '2024-12-07 00:20:40', '2024-12-07 00:20:40'),
(42, 'Rummana', 8657455, 2, '2024-12-11', 'Zeneva', '800', 1, 'pending', '2024-12-08 21:19:56', '2024-12-08 21:19:56'),
(43, 'Rummana', 8657455, 2, '2024-12-19', 'Zurich', '600', 1, 'pending', '2024-12-08 21:21:47', '2024-12-08 21:21:47');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Jamil Hossain', 'jamil@gmail.com', NULL, '$2y$10$UIcMs8CDJbUtitp4v29rRerTNxuDAy64gQQsKg.3BuNepBHJq595u', NULL, '2024-11-26 09:21:02', '2024-11-26 09:21:02'),
(2, 'user', 'user@gmail.com', NULL, '$2y$10$/Vb4FFY/Zp2JPxHjG/8veOoVvY5JgFvdJZjgR1XoLMtgvLVjz/YjO', NULL, '2024-11-26 11:36:46', '2024-11-26 11:36:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
