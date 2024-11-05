-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2024 at 08:31 AM
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
-- Database: `wdpf60_laravel_project2`
--

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
(6, '2014_10_12_000000_create_users_table', 1),
(7, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2024_11_02_060018_create_posts_table', 1);

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
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `detail` varchar(450) DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `name`, `detail`, `image`, `created_at`, `updated_at`) VALUES
(1, 'voluptatem iure fuga', 'maxime rerum et totam occaecati excepturi ut ipsum non rerum est sunt quis aut autem', NULL, '2024-11-02 00:56:54', '2024-11-02 00:56:54'),
(2, 'et in voluptatem', 'nobis enim ipsum deserunt ut omnis molestiae est in et et consectetur voluptas magni sint', NULL, '2024-11-02 00:56:54', '2024-11-02 00:56:54'),
(3, 'culpa dolorem non', 'dolore omnis rerum similique magni quibusdam molestias dolorem perspiciatis maiores ut deserunt rerum qui aliquam', NULL, '2024-11-02 00:56:54', '2024-11-02 00:56:54'),
(4, 'ipsa dolorem quas', 'earum corrupti sint voluptas aut commodi minus voluptatem error sed nemo minus natus vero aut', NULL, '2024-11-02 00:56:54', '2024-11-02 00:56:54'),
(5, 'est sed eum', 'aliquam doloremque sequi aut dolor ut blanditiis amet odio consequuntur beatae cumque cumque a assumenda', NULL, '2024-11-02 00:56:54', '2024-11-02 00:56:54'),
(6, 'est magni id', 'esse numquam nulla nostrum libero facere adipisci ut non dolor tempore ad voluptatum incidunt deleniti', NULL, '2024-11-02 00:56:55', '2024-11-02 00:56:55'),
(7, 'error quisquam eveniet', 'possimus ut pariatur saepe nesciunt non labore voluptate id nihil a cumque perferendis sed voluptas', NULL, '2024-11-02 00:56:55', '2024-11-02 00:56:55'),
(8, 'sed in illo', 'non ut et eius repellat sequi quae corporis rem ullam nam non quia ea aliquam', NULL, '2024-11-02 00:56:55', '2024-11-02 00:56:55'),
(9, 'illo illo dolor', 'dicta libero qui ea amet hic reiciendis magni dolorem voluptates sint quasi numquam fugit quae', NULL, '2024-11-02 00:56:55', '2024-11-02 00:56:55'),
(10, 'natus maxime provident', 'autem velit ipsa autem et inventore vel nulla repellat ipsa et sed consequatur reprehenderit repellat', NULL, '2024-11-02 00:56:55', '2024-11-02 00:56:55'),
(11, 'eligendi tenetur voluptas', 'accusamus qui explicabo incidunt et maxime quos ratione vel esse cumque quas sit qui molestias', NULL, '2024-11-02 01:01:13', '2024-11-02 01:01:13'),
(12, 'consequatur dolore nam', 'sed itaque cumque tempore sit velit et debitis aut voluptatem vel ad velit possimus nam', NULL, '2024-11-02 01:01:13', '2024-11-02 01:01:13'),
(13, 'vero ut accusantium', 'quo officia veritatis et sed occaecati odit odit ex vero sit sit voluptas similique dolor', NULL, '2024-11-02 01:01:13', '2024-11-02 01:01:13'),
(14, 'sint provident deserunt', 'cumque sed dolorem nobis repellat consequuntur sed dolores voluptatem voluptatem eos et beatae minus autem', NULL, '2024-11-02 01:01:13', '2024-11-02 01:01:13'),
(15, 'illo ipsam possimus', 'iste fugiat sunt qui sapiente explicabo assumenda et ut consequuntur sit quia facere at vel', NULL, '2024-11-02 01:01:13', '2024-11-02 01:01:13'),
(18, 'unde quasi aspernatur', 'adipisci nulla sit at quia consectetur dignissimos dolores officiis nulla velit eum vitae sint qui', NULL, '2024-11-02 01:01:13', '2024-11-02 01:01:13'),
(19, 'sed ut numquam', 'consequatur veniam sapiente officiis rerum dolores sed dolorum ullam iste ut omnis sit eligendi et', NULL, '2024-11-02 01:01:13', '2024-11-02 01:01:13'),
(21, 'hello', 'dfbdgv', '20241103050536.jpeg', '2024-11-02 23:05:37', '2024-11-02 23:05:37'),
(22, 'hello', 'dfbdgv', '20241103051728.jpeg', '2024-11-02 23:17:28', '2024-11-02 23:17:28'),
(23, 'Rakib', 'dfgjfghrfrth', '20241103060113.jpg', '2024-11-03 00:01:13', '2024-11-03 00:01:13'),
(24, 'hania', 'yukuyhj', '20241103060841.jpg', '2024-11-03 00:08:41', '2024-11-03 23:51:19'),
(27, 'njkjkn', 'dfhghrth', '20241103061512.jpg', '2024-11-03 00:15:12', '2024-11-03 00:15:12'),
(28, 'yuk', 'ykjyu', '20241103064339.jpg', '2024-11-03 00:43:39', '2024-11-03 00:43:39'),
(29, 'putin', 'Russia', '20241104031351.jpeg', '2024-11-03 21:13:51', '2024-11-03 22:50:40'),
(30, 'New', 'ajob', '20241104045157.jpg', '2024-11-03 22:31:58', '2024-11-03 22:51:57'),
(31, 'hospital', 'man', '20241104045128.jpg', '2024-11-03 22:32:19', '2024-11-03 23:52:06');

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
-- Indexes for dumped tables
--

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
-- Indexes for table `posts`
--
ALTER TABLE `posts`
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
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
