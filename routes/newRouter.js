const { Router } = require("express");
const newRouter = Router();

newRouter.get("/new", (req, res) => res.send("new message..."));



module.exports = newRouter;