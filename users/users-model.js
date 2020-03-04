const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  console.log(user)
   return db("users").insert(user);

}

function findById(id) {
  console.log("makes it here", id);
  return db("users")
    .where({ id })
    .first();
}
