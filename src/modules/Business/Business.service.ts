import LAOpenDataService from '@services/LAOpenData'

class BusinessService {
  public async findAll() {
    return LAOpenDataService.getData()
  }
  public async findOne() {
    const businesses = await LAOpenDataService.getData()

    return businesses[0]
  }
}

export default new BusinessService()
