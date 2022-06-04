// Modules and Globals
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");

// initialize the app object
const app = express();

// set up view engine and requiring jsx
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
// tool to decrypt POST data
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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
