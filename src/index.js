const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.PORT || 3000;

// parse incoming data to object
app.use(express.json());

app.post("/users", (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(() => {
      res.status(201).send(newUser);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.post("/tasks", (req, res) => {
  const newTask = new Task(req.body);
  newTask
    .save()
    .then(() => {
      res.status(201).send(newTask);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
