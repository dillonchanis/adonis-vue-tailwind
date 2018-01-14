'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class AuthController {
  async generateToken (auth, email, password) {
    let token

    try {
      token = await auth.attempt(email, password)
    } catch (e) {
      return e // todo
    }

    return token
  }

  async login ({ auth, request, response }) {
    const { email, password } = request.all()
    const user = await User.findBy('email', email)
    const token = await this.generateToken(auth, email, password)

    return response.status(200).json({ token, user })
  }

  async register ({ auth, request, response }) {
    /**
     * Getting needed paramaters.
     */
    const data = request.only(['username', 'email', 'password'])

    /**
     * Validating our data.
     */
    const validation = await validate(data, {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required'
    })

    /**
     * If validation fails, early return with validation messages
     */
    if (validation.fails()) {
      return validation.messages()
    }

    /**
     * Create user in the database.
     */
    const user = await User.create(data)
    const token = await this.generateToken(auth, data.email, data.password)

    /**
     * Return newly created user
     */
    return response.status(200).json({ token, user })
  }

  async logout ({ auth }) {
    const user = auth.current.user
    const token = auth.getAuthHeader()

    await user
      .tokens()
      .where('token', token)
      .update({ is_revoked: true })
  }
}

module.exports = AuthController
