
import { Header } from './/header';
import Footer from './footer';
import TampilanProduk from './tampilan_produk';
import '../App.css';
function Produk() {
  return (
    <div className="app flex flex-col gap-4 bg-white w-full dark:bg-gray-800 ">
      <Header />
      <TampilanProduk />
      <Footer />
    </div>
  );
}

export default Produk;