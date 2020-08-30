import LAOpenDataService from '@services/LAOpenData'
import { Pagination } from '@utils/types'

class BusinessService {
  public async findAll({ page, limit }: Pagination = {}) {
    const start = page * limit
    const end = page * limit + limit

    const businesses = await LAOpenDataService.getData()

    return businesses.slice(start, end)
  }

  public async findOldest() {
    const businesses = await LAOpenDataService.getData()

    const oldest = businesses.reduce((a, b) =>
      `${a.location_start_date}Z` < `${b.location_start_date}Z` ? a : b
    )

    return oldest
  }

  public async findOneWithMostLocations() {
    const businesses = await LAOpenDataService.getData()

    let locationsFrequencyByName = new Map()
    let maxFrequency = 0
    let result

    for (let i = 0; i < businesses.length; i++) {
      const business = businesses[i]
      const locationFrequency = locationsFrequencyByName.get(business.business_name)

      locationsFrequencyByName.set(business.business_name, (locationFrequency || 0) + 1)

      if (locationFrequency + 1 > maxFrequency) {
        maxFrequency = locationFrequency + 1
        result = business
      }
    }

    return businesses.filter(business => business.business_name === result.business_name)
  }
}

export default new BusinessService()
