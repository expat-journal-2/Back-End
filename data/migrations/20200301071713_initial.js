
exports.up = async function(knex) {
  await knex.schema.createTable('users', tbl =>{
      tbl.increments()
      tbl.string('email', 128)
      .notNullable()
      .unique()
      .index()
      tbl.string('password')
      .notNullable()
      tbl.string('username', 128)
      .notNullable()
      .index()
      tbl.string('image_URL')
      tbl.string('bio', 256)
  })
  await knex.schema.createTable('stories', tbl =>{
      tbl.increments()
      tbl.string('name', 128)
      .notNullable()
      .index()
      tbl.string('image_URL')
      tbl.string('location', 128)
      .index()
      tbl.string('content', 800)
      .notNullable()
      tbl.string('author', 128)
      .index()
      tbl.string('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('stories')
};
