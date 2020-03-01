const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors"); //do we need this if the fe connects via heroku?

const authRouter = require("../auth/auth-router.js");
const restricted = require("../auth/restricted-middleware.js");
const usersRouter = require("../users/users-router.js");
const storiesRouter = require("../stories/stories-router.js");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", restricted, usersRouter);
server.use("/api/stories", storiesRouter);

server.get("/", (req, res) => {
  res.send("API running");
});

module.exports = server;
