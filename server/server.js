require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const items = require("./routes/api/items");

const users = require("./routes/api/users");

const app = express();

// use cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-methods", "GET,POST,DELETE,PUT");
  next();
});
// easy cookie handling
app.use(cookieParser());
// to set sessions

// body parser middleware
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// connect mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB conected"))
  .catch((err) => console.log(err));

// use routes
app.use("/todo-list", items);

app.use("/user", users);

//serve static assests if in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("../client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

app.get("/", (req, res) => {
  res.send("I work o");
});
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
