const { Router } = require("express");
const newRouter = Router();

// Import messages
const db = require("../db");

newRouter.get("/new", (req, res) => {
  // console.log(req.params);
  res.render("form");
});

newRouter.post("/new", (req, res) => {
  const messageUser = req.body.user;
  const messageText = req.body.text;

  // Messages from db.js
  db.messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("..");
});



module.exports = newRouter;