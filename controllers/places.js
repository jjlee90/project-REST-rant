// making a controller
const router = require("express").Router();
const db = require("../models");
const places = require("../models/places.js");

// route for places
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
  // res.send("GET /places stub");
  // res.render("places/index", { places });
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
  // if (!req.body.pic) {
  //   // Default image if one is not provided
  //   req.body.pic =
  //     "https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";
  // }
  // if (!req.body.city) {
  //   req.body.city = "Anytown";
  // }
  // if (!req.body.state) {
  //   req.body.state = "USA";
  // }
  // places.push(req.body);
  // res.redirect("/places");
  // res.send("POST /places stub");
});

// render new view
router.get("/new", (req, res) => {
  res.render("places/new");
});

//show
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.put("/:id", (req, res) => {
  // let id = Number(req.params.id);
  // if (isNaN(id)) {
  //   res.render("error404");
  // } else if (!places[id]) {
  //   res.render("error404");
  // } else {
  //   // Dig into req.body and make sure data is valid
  //   if (!req.body.pic) {
  //     // Default image if one is not provided
  //     req.body.pic =
  //       "https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";
  //   }
  //   if (!req.body.city) {
  //     req.body.city = "Anytown";
  //   }
  //   if (!req.body.state) {
  //     req.body.state = "USA";
  //   }

  //   // Save the new data into places[id]
  //   places[id] = req.body;
  //   res.redirect(`/places/${id}`);
  // }
  res.send("PUT /places/:id stub");
});

router.delete("/:id", (req, res) => {
  // let id = Number(req.params.id);
  // if (isNaN(id)) {
  //   res.render("error404");
  // } else if (!places[id]) {
  //   res.render("error404");
  // } else {
  //   places.splice(id, 1);
  //   res.redirect("/places");
  // }
  res.send("DELETE /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
  // let id = Number(req.params.id);
  // if (isNaN(id)) {
  //   res.render("error404");
  // } else if (!places[id]) {
  //   res.render("error404");
  // } else {
  //   res.render("places/edit", { place: places[id], id });
  // }
  res.send("GET edit form stub");
});
router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

// exporting router
module.exports = router;
