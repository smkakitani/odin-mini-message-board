// Import messages
const db = require("../db");

// const path = require("node:path");
const { Router } = require("express");
const indexRouter = Router();



// Renders main HTML
indexRouter.get("/", (req, res) => {
  res.render("index", { messages: db.messages });
});



indexRouter.get("/", (req, res) => res.send("index route"));



module.exports = indexRouter;