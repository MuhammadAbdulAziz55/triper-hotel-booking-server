const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const roomInfo = require("./data/RoomInfo.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("yeeaaaa server is running");
});

app.get("/room-info", (req, res) => {
  res.send(roomInfo);
});
app.listen(port, () => {
  console.log("triper hotel booking server is running", port);
});
