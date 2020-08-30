export type Coords = {
  latitude: string
  longitude: string
}

export interface Business {
  location_account: string
  business_name: string
  street_address: string
  city: string
  zip_code: string
  location_description: string
  naics: string
  primary_naics_description: string
  council_district: string
  location_start_date: string
  location_1: Coords
}
