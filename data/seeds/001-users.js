exports.seed = function(knex) {
  return knex("users").insert([
    {
      email: "jonathan@lambda.com",
      password: "jonathanpass",
      username: "jonathan",
      bio: "Lambda Web 26"
    },
    {
      email: "nicole@lambda.com",
      password: "nicolepass",
      username: "nicole",
      bio: "Lambda Web 26"
    }
  ]);
};
