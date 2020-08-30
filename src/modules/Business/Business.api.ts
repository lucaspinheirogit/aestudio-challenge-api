import { Request } from 'express'
import { RestController, GET } from '@libstack/router'

import service from './Business.service'

@RestController('/businesses')
export default class BusinessRouter {
  @GET('/')
  findAll(req: Request) {
    const { page = 0, limit = 10 } = req.query
    const pagination = { page: Number(page), limit: Number(limit) }

    return service.findAll(pagination)
  }

  @GET('/oldest')
  findOne() {
    return service.findOldest()
  }

  @GET('/most-locations')
  findOneWithMostLocations() {
    return service.findOneWithMostLocations()
  }
}
