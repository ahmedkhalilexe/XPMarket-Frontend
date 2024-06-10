import axios from 'axios';
import {productType} from './types';

export default async function fetchAllProducts() {
  try {
    return await axios
          .get("http://localhost:3000/api/public/product/getallproducts")
          .then((res) => res.data as productType[]);
  } catch (error) {
    console.error(error);
  }
}
