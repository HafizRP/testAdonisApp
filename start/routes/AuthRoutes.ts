import Route from '@ioc:Adonis/Core/Route'

Route.get('/signin', 'AuthController.index')
Route.post('/signin', 'AuthController.store')
