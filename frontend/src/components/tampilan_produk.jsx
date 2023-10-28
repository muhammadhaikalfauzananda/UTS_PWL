import Card from "./card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function TampilanProduk() {
    //Variabel untuk menyimpan hasil respon
    const [responseData, setResponseData] = useState([])
    useEffect(() => {
        // request menggunakan axios untuk mendapatkan data dari database ke backend
        const url = 'http://127.0.0.1:6543//films';
        axios.get(url)
            .then((response) => {
                setResponseData(response.data)
                console.log('Respon data :', responseData);
                console.log('Respon:', response.data);
            })
            .catch((error) => {
                // Terjadi kesalahan saat melakukan permintaan
                console.error('Kesalahan:', error);
            });
    }, []);
    return (
        <div className="grid grid-cols-3 gap-2 bg-white w-full dark:bg-gray-800">
            {responseData.map((data) => (
                <Card data={data} key={data.id} />
            ))}
        </div>
    )
}