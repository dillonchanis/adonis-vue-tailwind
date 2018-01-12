'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class UserController {
  async store ({ request }) {
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

  /**
   * Get a user.
   */
  async show ({ request }) {
    const id = request.params.id
    let user

    if (!id) {
      return 'No user found.'
    }

    try {
      user = await User.find(id)
    } catch (err) {
      return err
    }

    return user
  }
}

module.exports = UserController
