'use client'
import client from "../axiosClient"
import Cookies from 'js-cookie';
const {axiosClient} = client
import axios from "axios";
axiosClient.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('token')}`

const getAllItems = async (type: string) => {
    try {
        const res = await axiosClient.get(`/items/verified/${type}`)
        return res.data.data
    } catch (e) {
        console.log(e)
        return e
    }
}
const getMyItem = async () => {
    try {
        const res = await axiosClient.get(`/items/myUpload`)
        return res
    } catch (e) {
        console.log(e)
        return e
    }
}

const getItem = async(id: number) => {
    try {
        const res = await axiosClient.get(`/items/details/${id}`)
        return res.data.data
    } catch (e){
        console.log(e)
        return e
    }
}

const submitForm = async (data: FormData) => {
    console.log('gambar:',data.get('image'))
    try {
        const res = await axios.post('https://api.lostnfound-rks301.com/api/items/create', data, {
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
const submitTransaction = async (data: FormData) => {
    try {
        const res = await axios.post('https://api.lostnfound-rks301.com/api/transaction/create', data, {
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

const getFinishedItem = async () => {
    try {
        const res = await axiosClient.get(`/items/finished`)
        return res.data
    } catch (e){
        console.log(e)
        return e
    }
}

const deleteForm = async () =>{
    // 
}
const editForm = async () =>{
    // 
}


const authLib = {
    getMyItem,
    submitTransaction,
    submitForm,
    deleteForm,
    editForm,
    getAllItems,
    getItem,
    getFinishedItem,
};

export default authLib;