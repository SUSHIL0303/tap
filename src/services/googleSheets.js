import axios from "axios"

const SHEET_URL = import.meta.env.VITE_PRODUCTS_SHEET_API;

export const getProducts = async () => {
  const res = await axios.get(SHEET_URL)
  return res.data
}