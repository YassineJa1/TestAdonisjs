import Entreprise from 'App/Models/Entreprise';

export default class EntreprisesController {
  public async show() {
    return 'GET entreprise';
  }

  public async store({ request }) {
    const name = request.input('name');
    const email = request.input('email');
    const password = request.input('password');
    const entreprise = new Entreprise();
    entreprise.name = name;
    entreprise.email = email;
    entreprise.password = password;
    await entreprise.save();
  }
  public async update({ params, request }) {
    const entreprise = await Entreprise.findOrFail(params.id);
    entreprise.name = request.input('name');
    entreprise.email = request.input('email');
    entreprise.password = request.input('password');
    await entreprise.save();
  }
  public async destroy({ params }) {
    const entreprise = await Entreprise.find(params.id);

    await entreprise?.delete();
  }
}
