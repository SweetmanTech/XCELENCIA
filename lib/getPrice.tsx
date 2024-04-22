import axios from "axios"

const getPrice = async () => {
  try {
    const response: any = await axios.get("/api/getEthPrice")
    return response?.data?.USD
  } catch (err) {
    return 0
  }
}

export default getPrice
