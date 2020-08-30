import { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

export const responseInterceptor = (response: AxiosResponse) => response?.data
export const responseErrorInterceptor = (error: AxiosError) => error

export const requestInterceptor = (config: AxiosRequestConfig) => config
export const requestErrorInterceptor = (error: AxiosError) => Promise.reject(error)
