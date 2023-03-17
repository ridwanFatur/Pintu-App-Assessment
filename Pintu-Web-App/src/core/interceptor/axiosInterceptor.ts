import axios, { type AxiosInstance } from 'axios'
class AxiosInterceptor {
  instance: AxiosInstance
  constructor () {
    this.instance = axios.create({
      timeout: 20000,
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
  }
}
export { AxiosInterceptor }
