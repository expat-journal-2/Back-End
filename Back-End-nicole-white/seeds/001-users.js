exports.seed = function(knex) {
  return knex("users").insert([
    {
      email: "jonathan@lambda.com",
      password: "jonathanpass",
      username: "jonathan",
      image_URL: "",
      bio: "Lambda Web 26"
    },
    {
      email: "nicole@lambda.com",
      password: "nicolepass",
      username: "nicole",
      image_URL: "",
      bio: "Lambda Web 26"
    }
  ]);
};
