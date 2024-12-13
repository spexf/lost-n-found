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



const adminApi = {
    getItem,
};

export default adminApi;