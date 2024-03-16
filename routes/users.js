const express = require("express");
const router = express.Router();

router.use(logger);

// Lets work with routes and Http Methods
// Define routes using the router object
router.get("/", logger, (req, res) => {
  console.log(req.query.name);
  res.send("Bharadwaj's List");
});

router.get("/new", (req, res) => {
  res.send("Bharadwaj's new Form!");
});

router.post("/", (req, res) => {
  res.send("Create User Manu Bharadwaj");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });

const users = [{ name: "Manu" }, { name: "Gowri" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
