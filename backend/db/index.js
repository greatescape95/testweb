var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'wine_db'
  }
});
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = {
  bookshelf: bookshelf,
  knex: knex
};
