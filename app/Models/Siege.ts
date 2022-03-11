import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Siege extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public password: string;
}
