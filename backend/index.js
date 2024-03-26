const mongoose = require("mongoose");
const app = require("../backend/app")
require("dotenv").config();



const PORT = process.env.PORT || 3000;
const MONGO_URI = "mongodb+srv://mmahaece07:Maha1431@cluster0.iei1qfm.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";
let server;

mongoose.connect(MONGO_URI).then(() => {
      console.log("Connected to MongoDB successfully");
      server = app.listen(PORT, () => {
          console.log(`App listening on port ${PORT}`);
      });
  }).catch(err => {
      console.error("Error connecting to MongoDB:", err);
  });