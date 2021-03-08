const express = require("express");
require("./db/mongoose");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.PORT || 3000;

// parse incoming data to object
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
