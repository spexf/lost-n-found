import axios from "axios";

const axiosClient = axios.create({
    baseURL: `http://192.168.100.53:9000/api`,
    headers: {
        'Accept': 'application/json',
        "Content-Type": 'application/json'
    }
})

const client = {
    axiosClient
}

export default client;

