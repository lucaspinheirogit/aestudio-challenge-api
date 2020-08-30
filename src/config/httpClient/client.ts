import axios, { AxiosInstance } from 'axios'

import {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor
} from './interceptors'

// Fix AxiosResponse types when using response interceptors
declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export default class httpClient {
  protected readonly client: AxiosInstance

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL
    })

    this.client.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
    this.client.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
  }
}
