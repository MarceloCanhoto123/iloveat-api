'use strict'
const UserService = use("App/Services/UserService")
class UserController {

  async create({request}){
    const data =  request.only(["username","email","password"])
    return UserService.create(data)
  }
}
module.exports = UserController
