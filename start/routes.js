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
const version = '/api/v1' // API Version

Route.on('/').render('home')

Route.group(() => {
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
  Route.post('/logout', 'AuthController.logout')
})
.prefix(version)

/**
 * Protected Routes
 */
Route.group(() => {
  Route.get('/user/:id', 'UserController.show')
})
.prefix(version)
.middleware(['auth:jwt'])
