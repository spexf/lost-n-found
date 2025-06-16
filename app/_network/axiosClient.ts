import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://api.lostnfound-rks301.com/api`,
    headers: {
        'Accept': 'application/json',
        "Content-Type": 'application/json'
    }
})

const client = {
    axiosClient
}

export default client;

