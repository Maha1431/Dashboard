const mongoose = require("mongoose");
const app = require("../backend/app")
require("dotenv").config();



const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017/test"
let server;

mongoose.connect(MONGO_URI).then(() => {
      console.log("Connected to MongoDB successfully");
      server = app.listen(PORT, () => {
          console.log(`App listening on port ${PORT}`);
      });
  }).catch(err => {
      console.error("Error connecting to MongoDB:", err);
  });