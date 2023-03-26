import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        username: 'Amparo Shields',
      },
      {
        username: 'Baird Adams',
      },
      {
        username: 'Houston Hansen',
      },
      {
        username: 'Park Bauer',
      },
      {
        username: 'Holloway Sharpe',
      },
      {
        username: 'Duffy Hubbard',
      },
      {
        username: 'Rojas Mosley',
      },
      {
        username: 'Contreras Munoz',
      },
      {
        username: 'Ericka Decker',
      },
      {
        username: 'Tricia Beasley',
      },
    ])
  }
}
