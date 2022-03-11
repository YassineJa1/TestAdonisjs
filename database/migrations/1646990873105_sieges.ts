import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sieges extends BaseSchema {
  protected tableName = 'sieges'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email')
      table.string('password')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  
