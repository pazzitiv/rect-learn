import Axios, {AxiosRequestConfig} from "axios";

export default class Api{
    private static api: string = 'http://127.0.0.1:8000/api';

    static get(method: string, params: AxiosRequestConfig)
    {
        return Axios.get(`${this.api}${method}`, params)
    }

    static post(method: string, params: AxiosRequestConfig)
    {
        return Axios.post(`${this.api}${method}`, params)
    }

    static patch(method: string, params: AxiosRequestConfig)
    {
        return Axios.patch(`${this.api}${method}`, params)
    }

    static delete(method: string, params: AxiosRequestConfig)
    {
        return Axios.delete(`${this.api}${method}`, params)
    }
}
