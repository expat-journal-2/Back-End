exports.seed = function(knex) {
  return knex("users").insert([
    {
      name: "Jonathan",
      location: "California",
      content: "This is the seed content.",
      author: "Jonathan author"
    },
    {
      name: "Nicole",
      location: "Hawaii",
      content: "This is the seed content.",
      author: "Nicole author"
    }
  ]);
};
