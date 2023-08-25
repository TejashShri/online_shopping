import axios from "axios";
const productUrl = 'https://fakestoreapi.com/products';

const getProductById = (productId) => {
    console.log(productId);
    // return axios.get(blogUrl + '/' + blogId);
    return axios.get(`${productUrl}/${productId}`);
};

export {getProductById};