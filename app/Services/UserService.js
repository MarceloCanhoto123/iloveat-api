'use-strict';
const User = use("App/Models/User")

class UserService{

    static async create(data){
      const userexists = await User.findBy('email', data['email'])
      
      if(userexists)
        return {"message":"E-mail já cadastrado"}

      const user = await User.create(data)
      return user
    }
}
module.exports = UserService;

