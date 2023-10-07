import axios from "axios";
const baseUrl = "https://dummyjson.com/products"

export const getProducts = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

export const getProduct = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
}

export const addProduct = async (data) => {
    const response = await axios.post(`${baseUrl}/add`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

export const editProduct = async (data, id) => {
    await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(res=> alert('Successfully Edited')).catch(console.error)
}

export const deleteProduct = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
}

