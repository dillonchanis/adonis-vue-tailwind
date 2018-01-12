'use strict'

const User = use('App/Models/User')

class AuthController {
  // Create JWT
  async create ({ auth, request, response, session }) {
    const { email, password } = request.all()
    const user = await User.findBy('email', email)
    let token

    try {
      token = await auth.attempt(email, password)
    } catch (e) {
      return e
    }

    return {
      token,
      user
    }
  }
}

module.exports = AuthController
