import { fixture, service } from '@modules/Business'

jest.mock('@services/LAOpenData', () => ({
  getData: () => fixture
}))

describe('Business Module', () => {
  it('Should return all businesses', async () => {
    const businesses = await service.findAll({ page: 0, limit: 5 })

    expect(businesses.count).toBe(10)
    expect(businesses.rows).toHaveLength(5)
  })
  it('Should return oldest business', async () => {
    const oldestBusiness = await service.findOldest()

    expect(oldestBusiness.location_start_date).toBe('1974-07-01T00:00:00.000')
  })
  it('Should return business with the most locations', async () => {
    const businesses = await service.findOneWithMostLocations()

    expect(businesses).toHaveLength(3)
    expect(businesses[0].business_name).toBe('A A OFICINA CENTRAL HISPANA DE LOS ANGELES /C')
  })
})
