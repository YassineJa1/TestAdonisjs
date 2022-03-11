/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

//Route.get('/', async () => {
//return { hello: 'world' }
//})
//**Entreprise */
Route.get('/entreprise', 'EntreprisesController.show');
Route.post('/entreprise', 'EntreprisesController.store');
Route.put('/entreprise/:id', 'EntreprisesController.update');
Route.delete('/entreprise/:id', 'EntreprisesController.destroy');

//Siege *//

Route.get('/siege', 'SiegesController.show');
Route.post('/siege', 'SiegesController.store');
Route.put('/siege/:id', 'SiegesController.update');
Route.delete('/siege/:id', 'SiegesController.destroy');
