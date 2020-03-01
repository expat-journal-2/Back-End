exports.seed = function(knex) {
  return knex("stories").insert([
    {
      name: "Jonathan",
      location: "California",
      content: "This is the seed content.",
      author: "Jonathan author",
      user_id: 1
    },
    {
      name: "Nicole",
      location: "Hawaii",
      content: "This is the seed content.",
      author: "Nicole author",
      user_id: 2
    }
  ]);
};
