const db = require('../data/dbConfig.js');

module.exports = {
    get,
    getById,
    insert,
  };
  
  function get() {
    return db('stories');
  }
  
  function getById(id) {
    return db("stories")
      .where({ id })
      .first();
  }
  
  function insert(story) {
    return db('stories')
      .insert(story)
      .then(ids => {
        return getById(ids[0]);
      });
  }
  