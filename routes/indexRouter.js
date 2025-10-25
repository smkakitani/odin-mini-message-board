// const path = require("node:path");
const { Router } = require("express");
const indexRouter = Router();

const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello, world!!!", user: "Charles", added: new Date() },
];

// Enables view engine /views
// indexRouter.set("../views", path.join(__dirname, "views"));
// indexRouter.set("view engine", "ejs");

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});






indexRouter.get("/", (req, res) => res.send("index route"));



module.exports = indexRouter;