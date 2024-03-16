const express = require("express");
const app = express();

app.use(express.static("public")); // to render static html page ( index.html ) inside public folder
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Hi Bharadwaj!");
  //   res.sendStatus(500); // sending status codes
  res.render("index", { text: "How are you?" }); // Using HTML with ejs
});

const userRouter = require("./routes/users");
const router = require("./routes/users");
app.use("/users", userRouter);

app.listen(3000);
