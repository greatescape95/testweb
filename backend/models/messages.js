var bookshelf = require('../db/index.js').bookshelf;

var Messages = bookshelf.Model.extend({
  tableName: 'messages',
  idAttribute: 'message_id',
});
module.exports = bookshelf.model('Messages', Messages);
