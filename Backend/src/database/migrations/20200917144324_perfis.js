exports.up = function(knex) {
   return knex.schema.createTable('perfis', function (table) {
        table.increments()
        table.string('nome').notNullable();
        table.decimal('idade').notNullable();
        table.string('empresa').notNullable();
        table.string('funcao').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfis')
};
