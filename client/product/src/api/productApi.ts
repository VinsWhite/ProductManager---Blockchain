import axios from 'axios'

const urlApi = 'http://localhost:3000/products';

export const getAllProducts = async () => {
    try {
        const response = await axios.get(urlApi);
        console.log(response.data) // just to verify
        return response.data
    } catch (error) {
        console.log(error);
        throw error;
    }
} 