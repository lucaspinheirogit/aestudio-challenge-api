import { RestController, GET } from '@libstack/router'

import service from './Business.service'

@RestController('/businesses')
export default class BusinessRouter {
  @GET('/')
  findAll() {
    return service.findAll()
  }
  @GET('/one')
  findOne() {
    return service.findOne()
  }
}
