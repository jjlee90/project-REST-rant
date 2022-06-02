// making a controller
const router = require("express").Router();

// render new view
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST /places");
});

// route for places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/burger.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/ramen.jpg",
    },
  ];
  res.render("places/index", { places });
});

// exporting router
module.exports = router;
