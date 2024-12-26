import client from "../axiosClient"
import Cookies from "js-cookie"
const {axiosClient} = client

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('token')}`

const getItem = async () => {
    try {
        const res = await axiosClient.get('/admin/items')
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}
const getUser = async () => {
    try {
        const res = await axiosClient.get('/admin/users')
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

const verifyItem = async (id: number) => {
    try {
        const res = await axiosClient.patch(`/admin/item/verify/${id}`)
        console.log(res)
        return res.status
    } catch (err) {
        console.log(err)
        return err
    }
}

const cancelItem = async (id: number) => {
    try {
        const res = await axiosClient.patch(`/admin/item/cancel/${id}`)
        console.log(res)
        return res.status
    } catch (err) {
        console.log(err)
        return err
    }
}

const banUser = async (id:number) => {
    try {
        const res = await axiosClient.put(`/admin/users/${id}/ban`)
        return res
    } catch (error) {
        return error
    }
}
const unBanUser = async (id:number) => {
    try {
        const res = await axiosClient.put(`/admin/users/${id}/unban`)
        return res
    } catch (error) {
        return error
    }
}



const adminApi = {
    getItem,
    verifyItem,
    cancelItem,
    getUser,
    unBanUser,
    banUser
};

export default adminApi;