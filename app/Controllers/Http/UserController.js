'use strict'

const User = use('App/Models/User')

class UserController {
  /**
   * Get a user.
   */
  async show ({ auth, request }) {
    const id = request.params.id

    /**
     * If currently logged in user matches ID sent in param
     * Just return the logged in user.
     */
    if (auth.user.id === Number(id)) {
      return auth.user
    }

    return await User.findOrFail(id)
  }
}

module.exports = UserController
