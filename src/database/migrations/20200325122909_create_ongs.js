// criado com o comando no terminal: npx knex migrate:make create_ongs
// depois roda o comando para gerar a tabela: npx knex migrate:latest
// para deletar a criação: npx knex migrate:rollback
// para conhecer os comandos: npx knex

exports.up = function (knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('ongs');
};
