import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Entreprises extends BaseSchema {
  protected tableName = 'entreprises';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name');
      table.string('email');
      table.string('password');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    });
  }
}
