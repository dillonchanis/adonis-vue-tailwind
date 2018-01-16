'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class AuthController {
  async login ({ auth, request, response }) {
    const { email, password } = request.all()

    /**
     * Validating our data.
     */
    const validation = await validate({ email, password }, {
      email: 'required|email',
      password: 'required'
    })

    /**
     * If validation fails, early return with validation messages
     */
    if (validation.fails()) {
      return response.status(400).send(validation.messages())
    }

    /**
     * Attempt to login user with credentials
     */
    const user = await auth.attempt(email, password)

    return user
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

    /**
     * Return newly created user
     */
    return user
  }

  async logout ({ auth, response }) {
    /**
     * Logout the user
     */
    await auth.logout()

    return response.redirect('/')
  }
}

module.exports = AuthController
