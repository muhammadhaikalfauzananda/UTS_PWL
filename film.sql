-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2023 at 04:42 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uts_pwl`
--

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE `film` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `stok` int(11) NOT NULL,
  `gambar` blob DEFAULT NULL,
  `sinopsis` text NOT NULL,
  `tahun` int(11) NOT NULL,
  `genre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`id`, `judul`, `harga`, `stok`, `gambar`, `sinopsis`, `tahun`, `genre`) VALUES
(4, 'Tenki No Ko', 99000, 87, NULL, 'seorang anak muda dari desa terpencil di Shikoku, yang meninggalkan rumah dan memutuskan untuk tinggal di Tokyo. Dalam perjalanannya, dia bertemu dengan Keisuke, seorang pria aneh yang menawarkan bantuan kepadanya. Merasa aneh dengan orang tersebut, Hodoka memutuskan untuk mencoba mencari peruntungan yang lain. Namun dia menghadapi kesulitan yang datang silih berganti dalam perjalannya. Setelah beberapa kali tidur di jalanan karena tidak ada orang lain yang bias dihubungi, Hodoka memutuskan untuk menghubungi Keisuke. Hodoka mendapatkan tawaran bekerja sebagai penulis majalah lokal milik Keisuke yang membahas supernatural dan hal hal aneh. Selama di Tokyo, Hodoka selalu diikuti cuaca aneh dimana hujan turun tiada henti. Saat menulis sebuah cerita, dia mendengar kisah pengendalian cuaca. Dia berusaha mencari kebenaran dari legenda urban di mana ada seorang gadis muda yang memiliki kekuatan untuk menghentikan hujan dan membuat langit menjadi cerah kembali. Pencariannya ini membuatnya bertemu dengan Hina Amano, seorang gadis yang memiliki kekuatan luar biasa yang dapat mengendalikan cuaca.', 23011, 'romance'),
(9, 'Oppenheimer ilmuan nuklir', 129000, 7, NULL, 'Kisah tentang seorang fisikawan Amerika Serikat bernama J. Robert Oppenheimer yang mengembangkan bom atom.', 2023, 'Dokumenter'),
(10, 'Naruto', 49000, 3, NULL, 'Naruto bercerita seputar kehidupan tokoh utamanya, Naruto Uzumaki, seorang ninja yang hiperaktif, periang, dan ambisius yang ingin mewujudkan keinginannya untuk mendapatkan gelar Hokage, pemimpin dan ninja terkuat di desanya.', 1997, 'Action'),
(11, 'One Piece ', 149000, 15, NULL, 'Gol D. Roger merupakan Raja Bajak Laut menghadapi eksekusi mati yang divonis oleh Pemerintah Dunia. Sebelum nyawanya dihabisi, Roger mengucapkan kata-kata terakhir.  Ia mengizinkan semua bajak laut di seluruh dunia untuk memburu harta karunnya yang tersembunyi di Grand Line, bernama One Piece. Siapa pun bajak laut yang berhasil menemukan harta karunnya bisa memilikinya.  Di belahan dunia yang lain, seorang bocah bernama Monkey D. Luffy (Iñaki Godoy) ingin mengikuti jejak Shanks (Peter Gadiot) sebagai seorang bajak laut. Namun, Shanks menilai Luffy belum siap.  Baca artikel CNN Indonesia \"Sinopsis Serial One Piece, Bajak Laut Topi Jerami Memburu Harta Karun\" selengkapnya di sini: https://www.cnnindonesia.com/hiburan/20230831132533-220-992905/sinopsis-serial-one-piece-bajak-laut-topi-jerami-memburu-harta-karun.  Download Apps CNN Indonesia sekarang https://app.cnnindonesia.com/', 2023, 'Action'),
(12, 'Loki', 156000, 8, NULL, 'Ulah Loki membuka tabir misterius sebuah organisasi yang selama bekerja di balik layar Marvel Cinematic Universe. Tak hanya itu, ia juga harus membenahi kekacauan yang sudah dilakukannya. ', 2023, 'Action'),
(13, 'Avengers: Endgame', 139000, 5, NULL, 'Melanjutkan Avengers Infinity War, dimana kejadian setelah Thanos berhasil mendapatkan semua infinity stones dan memusnahkan 50% semua mahluk hidup di alam semesta. Akankah para Avengers berhasil mengalahkan Thanos?', 2019, 'Action'),
(14, 'Ketika Berhenti di Sini', 89000, 3, NULL, 'Dita, seorang desainer grafis dengan idealisme tinggi, yang memiliki rasa takut akan kegagalan dipertemukan dengan Ed, seorang arsitek. Pertemuan yang diawali salah paham, berujung pada perbincangan hangat. Dua manusia yang serupa tapi tak sama bersatu. Empat tahun sejak pertemuan pertama mereka, Dita merasa hubungan mereka jalan di tempat, tanpa disadari dita selalu menuntut ed seperti apa yang dia inginkan, namun akhirnya Ed mengalami kecelakaan dan meninggal. Dita terpukul dan dihinggapi rasa bersalah. Dua tahun kemudian, Dita berusaha melupakan segalanya tentang Ed dan mencoba menjalani kehidupannya yang baru bersama Ifan, sahabat nya sejak kecil yang sekarang menjadi kekasihnya. Tak lama berselang Dita justru mendapatkan sebuah kacamata ‘LOOK’ dengan tekhnologi Augmented Reality (AR) yang bisa menghadirkan sosok Ed, persis sama seperti nyata. Akankah Dita kembali menerima kehadiran Ed atau bertahan bersama Ifan', 2023, 'Romance'),
(15, 'Koala Kumal', 79000, 4, NULL, 'KOALA KUMAL masih bercerita tentang Dika, seorang cowok yang baru saja batal menikah karena pacarnya, Andrea selingkuh darinya dengan cowok bernama James. Patah hatinya membuat Dika kesulitan menulis bab terakhir dari bukunya. Suatu hari, Dika bertemu dengan cewek bernama Trishna, cewek yang unik yang membuat sudut pandang Dika terhadap dunia menjadi berbeda.', 2017, 'Romance');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `film`
--
ALTER TABLE `film`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
