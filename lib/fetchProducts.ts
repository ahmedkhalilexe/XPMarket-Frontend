import  axios  from 'axios';
import { productType } from './types';
export default async function fetchProducts() {
  try {
    const queryResult: productType[] = await axios
      .get("http://localhost:3000/api/public/product/getallproducts")
      .then((res) => res.data);
      return queryResult;
  } catch (error) {
    console.error(error);
  }
}
