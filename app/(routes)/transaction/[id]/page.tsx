'use client';
import React, { useState, ChangeEvent } from 'react';
import authLib from '@/app/_network/_authApi/userApi';
import { toast } from 'react-toastify';

export default function FormPenerimaanBarang({params}: {params: {id: number}}) {
    const [imagePreviewChat, setImagePreviewChat] = useState<string>('');
    const [imagePreviewPemindahan, setImagePreviewPemindahan] = useState<string>('');
    const [emailPenerima, setEmailPenerima] = useState('');
    const [lokasiPemindahan, setLokasiPemindahan] = useState('');
    const [fileChat, setFileChat] = useState<File | null>(null);
    const [filePemindahan, setFilePemindahan] = useState<File | null>(null);
    const customStyle: object = {
        backgroundColor: '#ff4d4d', // Red background for error
        color: 'white',
        fontSize: '16px',
        borderRadius: '5px',
        padding: '10px 20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };
    const handleFileChange = (
        event: ChangeEvent<HTMLInputElement>,
        setImagePreview: React.Dispatch<React.SetStateAction<string>>,
        setFile: React.Dispatch<React.SetStateAction<File | null>>
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFile(file);
            setImagePreview(imageUrl);
        } else {
            setFile(null);
            setImagePreview('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!fileChat || !filePemindahan) {
            console.log('');
            toast('Please upload all required images!', {
                style: customStyle
            })
            return;
        }

        const formData = new FormData();
        formData.append('email', emailPenerima);
        formData.append('item_id', params.id)
        formData.append('transaction_location', lokasiPemindahan);
        formData.append('chatImage', fileChat);
        formData.append('transactionImage', filePemindahan);

        try {
            // Replace this with your actual API call
            const res = await authLib.submitTransaction(formData);
            console.log(res)
            console.log('Form submitted:', Object.fromEntries(formData));
            toast('Data submited !')
            // window.location.href = '/my-uploads'
        } catch (error) {
            console.error('Error submitting form:', error);
            toast('Error !', {
                style: customStyle
            })
        }
    };

    return (
        <div className="bg-[#03001C] text-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>Form Penerimaan Barang</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* ID Penerima */}
                    <div>
                        <label htmlFor="email-penerima" className="block text-sm font-medium mb-1" style={{ fontFamily: "Poppins, sans-serif" }}> Penerima</label>
                        <input
                            type="text"
                            id="email-penerima"
                            value={emailPenerima}
                            onChange={(e) => setEmailPenerima(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        />
                    </div>

                    {/* Foto Bukti Chat */}
                    <div>
                        <label htmlFor="foto-bukti-chat" className="block text-sm font-medium mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>Foto Bukti Chat</label>
                        <input
                            type="file"
                            id="foto-bukti-chat"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, setImagePreviewChat, setFileChat)}
                            className="hidden"
                        />
                        <label htmlFor="foto-bukti-chat" className="block cursor-pointer">
                            {imagePreviewChat ? (
                                <img src={imagePreviewChat} alt="Preview Chat" className="w-full rounded" />
                            ) : (
                                <div className="w-full px-4 py-10 bg-gray-700 rounded flex justify-center items-center border-2 border-dashed border-gray-600 text-gray-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                                    Click to upload an image
                                </div>
                            )}
                        </label>
                    </div>

                    {/* Foto Pemindahan Barang */}
                    <div>
                        <label htmlFor="foto-pemindahan" className="block text-sm font-medium mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>Foto Pemindahan Barang</label>
                        <input
                            type="file"
                            id="foto-pemindahan"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, setImagePreviewPemindahan, setFilePemindahan)}
                            className="hidden"
                        />
                        <label htmlFor="foto-pemindahan" className="block cursor-pointer">
                            {imagePreviewPemindahan ? (
                                <img src={imagePreviewPemindahan} alt="Preview Pemindahan" className="w-full rounded" />
                            ) : (
                                <div className="w-full px-4 py-10 bg-gray-700 rounded flex justify-center items-center border-2 border-dashed border-gray-600 text-gray-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                                    Click to upload an image
                                </div>
                            )}
                        </label>
                    </div>

                    {/* Lokasi Pemindahan */}
                    <div>
                        <label htmlFor="lokasi-pemindahan" className="block text-sm font-medium mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>Lokasi Pemindahan</label>
                        <input
                            type="text"
                            id="lokasi-pemindahan"
                            value={lokasiPemindahan}
                            onChange={(e) => setLokasiPemindahan(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
