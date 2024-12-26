'use client';
import { FaCamera } from "react-icons/fa";
import Navbar from "@/app/_components/navbarComponents/Navbar";
import { useState, ChangeEvent } from "react";
import authLib from "@/app/_network/_authApi/userApi";
import './style.css';
import { useRouter } from 'next/router';

const Add = () => {
    const [isFile, setIsFile] = useState(false);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [data, setData] = useState({
        item: '',
        location: '',
        type: 'lost',
        description: ''
    });
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // Fungsi untuk menangani perubahan input file dan menampilkan pratinjau gambar
    const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Ambil file pertama yang dipilih
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Membuat URL untuk gambar pratinjau
            setSelectedImage(file); // Menyimpan file yang dipilih
            setImagePreview(imageUrl); // Menampilkan gambar pratinjau
            setIsFile(true); // Menandakan bahwa gambar telah dipilih
        } else {
            setIsFile(false); // Tidak ada gambar yang dipilih
            setImagePreview(''); // Hapus pratinjau gambar
        }
    };

    // Fungsi untuk menyimpan data dan mengirimkan form
    const storeData = async (e: React.FormEvent) => {
        e.preventDefault(); // Mencegah form melakukan submit secara default
        if (!selectedImage) {
            console.log('Pilih gambar terlebih dahulu!');
            return;
        }

        const formData = new FormData();
        formData.append('item', data.item);
        formData.append('location', data.location);
        formData.append('type', data.type);
        formData.append('description', data.description);
        formData.append('image', selectedImage); // Menambahkan file gambar

        try {
            // Mengirim data ke API
            const response = await authLib.submitForm(formData);
            console.log('Data berhasil dikirim:', response);
            if (response == 200){
                window.location.href = `/${data.type}`
            } 
        } catch (error) {
            console.error("Gagal mengirim data:", error);
        }
    };

    return (
        <div className="content mb-5">
            <Navbar />
            <div className="form">
                <input
                    type="file"
                    id="image"
                    onChange={setImage}
                    className="opacity-0"
                    accept="image/*"
                    multiple={false}
                    hidden
                />
                {!isFile ? (
                    <label id="drop-area" htmlFor="image" className="photo-uploads">
                        <FaCamera className="sm:mb-3" color="white" size={90} />
                        <p>click here to upload an image</p>
                    </label>
                ) : (
                    <label id="drop-area" htmlFor="image" className="photo-uploads sm:h-fit">
                        <img src={imagePreview} className="rounded-[5px]" alt="img" />
                    </label>
                )}

                <div className="flex-col flex items-center justify-center">
                    <input
                    className="inputText"
                    type="text"
                    value={data.item}
                    onChange={(e) =>
                        setData((d) => ({
                            ...d,
                            item: e.target.value
                        }))
                    }
                    max={25}
                    id="items"
                    placeholder="what kind of item?"
                />

                <h4 className="self-start font-medium text-[20px]" style={{ fontFamily: "'Poppins',monospace" }}>Details</h4>
                <input
                    className="inputText"
                    type="text"
                    value={data.location}
                    onChange={(e) =>
                        setData((d) => ({
                            ...d,
                            location: e.target.value
                        }))
                    }
                    id="location"
                    placeholder="founded / lost location"
                />
                </div>
                

                <div className="selectContainer">
                    <select
                        name="type"
                        className="inputSelect"
                        onChange={(e) =>
                            setData((d) => ({
                                ...d,
                                type: e.target.value
                            }))
                        }
                        defaultValue={'lost'}
                        value={data.type}
                        id="type"
                    >
                        <option value="lost">lost</option>
                        <option value="found">found</option>
                    </select>
                </div>

                <textarea
                    name="description"
                    value={data.description}
                    placeholder="more details"
                    onChange={(e) =>
                        setData((d) => ({
                            ...d,
                            description: e.target.value
                        }))
                    }
                    className="inputTextarea"
                    id="description"
                ></textarea>

                <button type="submit" className="buttonContainer" onClick={storeData}>
                    <div className="sendButton">submit</div>
                </button>
            </div>
        </div>
    );
};

export default Add;
