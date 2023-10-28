import './card.css';
import { useState } from 'react';
import axios from 'axios';
export function Header() {
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };
    const [judul, setJudul] = useState('')
    const [sinopsis, setSinopsis] = useState('')
    const [tahun, setTahun] = useState('')
    const [genre, setGenre] = useState('')
    const [harga, setHarga] = useState('')
    const [stok, setStok] = useState('')

    const handlePostRequest = () => {
        const url = 'http://127.0.0.1:6543//films';
        const data = {
            "judul": judul,
            "sinopsis": sinopsis,
            "tahun": tahun,
            "genre": genre,
            "harga": parseInt(harga),
            "stok": parseInt(stok)
        }

        axios.post(url, data)
            .then((response) => {
                // Berhasil mengirimkan permintaan POST
                window.location.reload();
            })
            .catch((error) => {
                // Terjadi kesalahan saat melakukan permintaan
                console.error('Kesalahan:', error);
            });
    }

    return (
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                    <div class="flex items-center justify-center lg:order-2 mx-auto">
                        <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Produk</a>
                        <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Keranjang</a>
                        <button onClick={toggleModal} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Tambahkan Film</button>
                    </div>
                </div>
            </nav>
            {isModalOpen && (
                <div >
                    <div class="box-modal-tambah">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button onClick={toggleModal} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Tambahkan Produk</h3>
                                <form class="space-y-6" action="#">
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul</label>
                                        <input onChange={(e) => setJudul(e.target.value)} type="text" name="judul" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">sinopsis</label>
                                        <input onChange={(e) => setSinopsis(e.target.value)} type="text" name="sinopsis" id="sinopsis" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">tahun</label>
                                        <input onChange={(e) => setTahun(e.target.value)} type="text" name="tahun" id="tahun" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">genre</label>
                                        <input onChange={(e) => setGenre(e.target.value)} type="text" name="genre" id="genre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">harga</label>
                                        <input onChange={(e) => setHarga(e.target.value)} type="text" name="harga" id="harga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">stok</label>
                                        <input onChange={(e) => setStok(e.target.value)} type="text" name="stok" id="stok" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <button onClick={handlePostRequest} type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header >
    )
}