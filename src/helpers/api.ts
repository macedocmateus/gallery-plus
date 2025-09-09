import axios, {type AxiosRequestConfig } from 'axios'

// Chamar as APIs, post, put, patch e delete
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// Chamar exclusivamente o get
export const fetcher = (url: string, options: AxiosRequestConfig = {}) =>
  api.get(url, options).then((res) => res.data);
