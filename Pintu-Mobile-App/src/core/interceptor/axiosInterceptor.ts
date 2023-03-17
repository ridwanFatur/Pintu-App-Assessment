import axios, {AxiosInstance} from 'axios';
class AxiosInterceptor {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      timeout: 20000,
    });
  }
}
export {AxiosInterceptor};
