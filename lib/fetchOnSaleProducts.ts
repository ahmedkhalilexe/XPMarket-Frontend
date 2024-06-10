import axios from 'axios';
import {productType} from './types';

export default async function fetchOnSaleProducts() {
    try {
        return await axios
            .get("http://localhost:3000/api/public/product/getOnSaleProducts")
            .then((res) => res.data as productType[]);
    } catch (error) {
        console.error(error);
    }
}
