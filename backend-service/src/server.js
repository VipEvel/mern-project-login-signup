//mongodb
require("./config/database");

const cors = require("cors");
const UserRouter = require("./api/Users");
const app = require("express")();

const port = process.env.PORT || 5000;

app.use(cors());

// For accepting post from data
const bodyParser = require("express").json;
app.use(bodyParser());

app.use("/user", UserRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
