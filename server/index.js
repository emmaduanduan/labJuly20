const express = require("express");
const path = require("path");
const app = express();
// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "fc7ee2aeb631406aa32b2b725442abdc",
  captureUncaught: true,
  captureUnhandledRejections: true,
});
try {
  nonExistentFunction();
} catch (error) {
  console.error("This is a mistake.");
}
// record a generic message and send it to Rollbar
rollbar.log("Hello world!");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});
app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../style.css"));
});
app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../main.js"));
});

// check the value of port. If it does not have one, we use 4005 by default.
const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
