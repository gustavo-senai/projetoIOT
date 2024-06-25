import axios from 'axios'

const http = axios.create({
  baseURL: "https://ny3.blynk.cloud/external/api/get?token=2Mqfk3a3xe8JprDv8OaFTjiaB-IpYrxm"
})

export default http