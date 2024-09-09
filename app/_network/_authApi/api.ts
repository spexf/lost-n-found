import client from "../axiosClient"

const {axiosClient} = client

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

const submitForm = async (data: {image: File, location: string, type: 'lost' | 'found', detail: string}) => {
    try {
        const res = await axiosClient.post('/uploadCase', {
            image: data.image,
            location: data.location,
            type: data.type,
            detail: data.detail
        })
        console.log(res)
        return res
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