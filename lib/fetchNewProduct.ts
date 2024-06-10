import axios from 'axios';
import {productType} from './types';

export default async function fetchNewProducts() {
    try {
        return await axios
            .get("http://localhost:3000/api/public/product/getNewProducts")
            .then((res) => res.data as productType[]);
    } catch (error) {
        console.error(error);
    }
}
