const db = require("../data/dbConfig.js");

module.exports = {
  find,
  update,
  remove
};

function find() {
  return db("stories").select("*");
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
