// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Siege from 'App/Models/Siege';

export default class SiegesController {
  public async store({ request }) {
    const name = request.input('name');
    const email = request.input('email');
    const password = request.input('password');
    const siege = new Siege();
    siege.name = name;
    siege.email = email;
    siege.password = password;
    await siege.save();
  }
  public async update({ request, params }) {
    const siege = await Siege.findOrFail(params.id);
    siege.name = request.input('name');
    siege.email = request.input('email');
    siege.password = request.input('password');
    await siege.save();
  }
  public async destroy({ params }) {
    const siege = await Siege.find(params.id);
    await siege?.delete();
  }
  public async show() {
    return Siege.all();
  }
}
