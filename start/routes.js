'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
const version = 'api/v1' // API Version

Route.on('/').render('home')

Route.group(() => {
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
})
.prefix(version)

/**
 * Protected Routes
 */
Route.group(() => {
  Route.post('/logout', 'AuthController.logout')
  Route.get('/user/:id', 'UserController.show')
})
.prefix(version)
.middleware('auth')
