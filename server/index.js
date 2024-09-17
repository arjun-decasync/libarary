const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UsersignupModel = require("./models/usersignup");



mongoose
  .connect(
    "mongodb+srv://arjun:arjunbindran@cluster21.p68zgnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster21"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", (req, res) => {
  UsersignupModel.create(req.body)
    .then((usersignup) => res.json(usersignup))
    .catch((err) => res.json(err));
  res.send("success!!!!");
});

//3.Api creation
app.get("/", async (req, res) => {
  res.send("success!!!!");
});

app.get("/trial", (req, res) => {
  res.send("trial api is working");
});


app.post('/create', async (req, res) => {
    var result = await new UsersignupModel(req.body);
    result.save();
    res.send("data is added!!!");
});

app.listen(3001, () => {
  console.log("server is running");
});
