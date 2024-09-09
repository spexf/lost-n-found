import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://api.lostnfound.net`,
    headers: {
        'Accept': 'applicatoin/json',
        "Content-Type": 'application/json'
    }
})

const client = {
    axiosClient
}

export default client;