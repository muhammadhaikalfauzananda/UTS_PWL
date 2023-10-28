import React, { useState } from 'react';
import './card.css';
import axios from 'axios';
export default function Card({ data }) {

    // const { id, judul, harga, stok, sinopsis, tahun } = data;
    //untuk menyimpan nilai 
    const [id, setID] = useState(data.id)
    const [judul, setJudul] = useState(data.judul)
    const [sinopsis, setSinopsis] = useState(data.sinopsis)
    const [tahun, setTahun] = useState(data.tahun)
    const [genre, setGenre] = useState(data.genre)
    const [harga, setHarga] = useState(data.harga)
    const [stok, setStok] = useState(data.stok)
    //untuk melakukan perminataan edit berupa put ke backend
    const handleGetRequest = () => {
        const url = `http://127.0.0.1:6543//films/${id}`;
        const data = {
            "judul": judul,
            "sinopsis": sinopsis,
            "tahun": tahun,
            "genre": genre,
            "harga": parseInt(harga),
            "stok": parseInt(stok)
        }

        axios.put(url, data)
            .then((response) => {
                // Berhasil mengirimkan permintaan POST
                window.location.reload();
            })
            .catch((error) => {
                // Terjadi kesalahan saat melakukan permintaan
                console.error('Kesalahan:', error);
            });
    }


    //untuk membuka modals untuk melihat detail film
    const [isModalEditOpen, setModalEditOpen] = useState(false);
    const toggleModalEdit = () => {
        setModalEditOpen(!isModalEditOpen);
    };

    //untuk membuka modals untuk melihat detail film
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };
    //fungsi untuk menghaous film
    const hapus_film = () => {
        const url = `http://127.0.0.1:6543//films/${id}`;
        axios.delete(url)
            .then((response) => {
                //jika respon benar
                console.log('Respon:', response.data);
                //refres untuk memuat data terbaru
                window.location.reload();
            })
            .catch((error) => {
                // Terjadi kesalahan saat melakukan permintaan
                console.error('Kesalahan:', error);
            });
    }

    return (
        <div className="m-auto">
            <div className="custom-box bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <p class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">{judul}</p>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rp{harga}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Jumlah stok : {stok}</p>
                    <div className='flex flex-row gap-3'>
                        <button onClick={toggleModal} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Selengkapnya
                        </button>
                        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Keranjang
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div class="box-modal ">
                    <div class="relative w-full max-w-2xl max-h-full ">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    {judul}
                                </h3>
                                <button onClick={toggleModal} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div class="p-6 space-y-6">
                                <div>
                                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        Sinopsis:
                                        <br />
                                        {sinopsis}
                                    </p>
                                </div>
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    Tahun Rilis : {tahun}
                                </p>
                            </div>
                            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button onClick={toggleModalEdit} data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                                <button onClick={hapus_film} data-modal-hide="default-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-red-600 dark:hover:bg-red-800 dark:border-red-500 dark:hover:text-white  dark:focus:ring-red-800">Hapus</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

            {isModalEditOpen && (
                <div >
                    <div class="box-modal-tambah">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button onClick={toggleModalEdit} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit data Produk</h3>
                                <form class="space-y-6" action="#">
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul</label>
                                        <input onChange={(e) => setJudul(e.target.value)} type="text" name="judul" id="email" value={judul} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">sinopsis</label>
                                        <input onChange={(e) => setSinopsis(e.target.value)} type="text" name="sinopsis" id="sinopsis" value={sinopsis} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">tahun</label>
                                        <input onChange={(e) => setTahun(e.target.value)} type="text" name="tahun" id="tahun" value={tahun} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">genre</label>
                                        <input onChange={(e) => setGenre(e.target.value)} type="text" name="genre" id="genre" value={genre} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">harga</label>
                                        <input onChange={(e) => setHarga(e.target.value)} type="text" name="harga" id="harga" value={harga} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">stok</label>
                                        <input onChange={(e) => setStok(e.target.value)} type="text" name="stok" id="stok" value={stok} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <button onClick={handleGetRequest} type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div >
    )
}