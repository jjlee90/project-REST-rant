// making a controller
const router = require("express").Router();
const places = require("../models/places.js");

// render new view
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic =
      "https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

// route for places
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

// exporting router
module.exports = router;
