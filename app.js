// Import dotenv
require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!!!"));

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