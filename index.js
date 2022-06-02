// get environment variables
require("dotenv").config();

//require needed modules
const express = require("express");

// initialize the app object
const app = express();

// set up view engine and requiring jsx
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
// tool to decrypt POST data
app.use(express.urlencoded({ extended: true }));

// using router from places
app.use("/places", require("./controllers/places"));

// create home page route
app.get("/", (req, res) => {
  res.render("home");
});

// catch all other routes
app.get("*", (req, res) => {
  res.status(404).render("error404");
});

// listen for connections
app.listen(process.env.PORT);
