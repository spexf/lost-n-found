'use client'
import client from "../axiosClient"
import Cookies from 'js-cookie';
const {axiosClient} = client
import axios from "axios";
axiosClient.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('token')}`


const submitForm = async (data: FormData) => {
    console.log('gambar:',data.get('image'))
    try {
        const res = await axios.post('http://192.168.100.53:9000/api/items/create', data, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
                'Content-Type': 'multipart-form/data',
                'Accept': 'multipart-form/data'
            }
        })
        console.log(res.status)
        return res.status
    } catch (error) {
        console.log(error)
        return error
    }
}

const deleteForm = async () =>{
    // 
}
const editForm = async () =>{
    // 
}


const authLib = {
    submitForm,
    deleteForm,
    editForm
};

export default authLib;