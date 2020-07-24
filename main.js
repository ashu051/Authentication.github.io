const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users.js");
const bodyParser = require("body-parser");
const app = express();
var url = "mongodb://localhost:27017/myapp";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`${port} port in on `);
});

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const path = require("path");

// const users = require("./routes/api/users");

// const app = express();

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // DB Config
// const db = require("./config/keys").mongoURI;

// // Connect to MongoDB
// const MongoClient = require("mongodb").MongoClient;

// // replace the uri string with your connection string.
// const uri = db;
// MongoClient.connect(
//   uri,
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   function (err, client) {
//     if (err) {
//       console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
//     }
//     console.log("Connected...");
//     const collection = client.db("test").collection("users");
//     // perform actions on the collection object
//     client.close();
//   }
// );

// // Passport middleware
// app.use(passport.initialize());

// // Passport Config
// require("./config/passport")(passport);

// // Use Routes
// app.use("/api/users", users);
// // Server static assets if in production

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}`));
