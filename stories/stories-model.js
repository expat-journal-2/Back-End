const db = require('../data/dbConfig.js');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
    findStories
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

  function update(id, changes) {
    return db("stories")
      .where({ id })
      .update(changes);
  }
  function remove(id) {
    return db("stories")
      .where("id", id)
      .del();
  }
  
  function findStories(id) {
    return db("stories")
      .join("users", "users.id", "stories.user_id")
      .select("stories.author", "stories.name", "stories.image_URL", "stories.location", "stories.content")
      .where("user_id", id);
  }
  