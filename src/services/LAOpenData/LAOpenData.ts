import { setupCache } from 'axios-cache-adapter'

import httpClient from '@config/httpClient'
import { Business } from '@modules/Business'

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

class LAOpenData extends httpClient {
  public constructor() {
    super('https://data.lacity.org/resource/6rrh-rzua.json', cache.adapter)
  }

  async getData() {
    return require('./business-list.json')
    return this.client.get<Business[]>('/')
  }
}

export default new LAOpenData()
