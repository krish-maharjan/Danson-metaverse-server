const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./src/routes/userRoutes");

const chapterRouter = require("./src/routes/chapterRouter");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// setting auth api api
app.use("/api", userRouter, chapterRouter);

// homepage
app.get("/", (req, res) => {
  res.send("The server is running");
});

// starting server
app.listen(5000, () => console.log("Server listening on port 5000"));
