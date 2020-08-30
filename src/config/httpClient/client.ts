import axios, { AxiosInstance, AxiosAdapter } from 'axios'

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

  constructor(baseURL: string, adapter?: AxiosAdapter) {
    this.client = axios.create({
      baseURL,
      adapter
    })

    this.client.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
    this.client.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
  }
}
