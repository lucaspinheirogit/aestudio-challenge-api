import httpClient from '@config/httpClient'
import { Business } from '@modules/Business'

class LAOpenData extends httpClient {
  public constructor() {
    super('https://data.lacity.org/resource/6rrh-rzua.json')
  }

  async getData() {
    return this.client.get<Business[]>('/')
  }
}

export default new LAOpenData()
