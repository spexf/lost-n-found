import axios from "axios";

const axiosClient = axios.create({
    baseURL: `http://localhost:9000/api`,
    headers: {
        'Accept': 'application/json',
        "Content-Type": 'application/json'
    }
})

const client = {
    axiosClient
}

export default client;

