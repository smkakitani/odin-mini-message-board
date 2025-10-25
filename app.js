// Import dotenv
require("dotenv").config();

// Start server
const express = require("express");
const app = express();

// Import path
const path = require("node:path");

// Import routers from ./routes
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");


// EJS views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// app.get("/", (req, res) => res.send("Hello, world!!!"));
app.use("/", indexRouter);
app.use("/messages", newRouter);



const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Mini message board app! Listening on port ${PORT}`);
});



// Using environment variables
if (process.env.NODE_ENV === "prod") {
    // do production-specific stuff
};