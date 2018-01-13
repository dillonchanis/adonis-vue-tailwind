'use strict'

const User = use('App/Models/User')

class UserController {
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
      return err // todo
    }

    return user
  }
}

module.exports = UserController
