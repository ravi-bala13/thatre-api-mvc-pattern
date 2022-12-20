const express = require("express");

const app = express();

require("dotenv").config();

const connect = require("./config/db.js");

app.use(express.json());

const userController = require("./controllers/users.controller");

const movieController = require("./controllers/movies.controller");

const theatreController = require("./controllers/theatres.controller");

const screenController = require("./controllers/screens.controller");

const showController = require("./controllers/shows.controller");

const seatController = require("./controllers/seats.controller");

const { register, login } = require("./controllers/auth.controller");

// *****************edited for deploy*********************

//app.get('/', function (req, res) {
//    return res.redirect('https://faballey-clone.vercel.app/');
//});

// **************************************
app.post("/register", register);
app.post("/login", login);

app.use("/users", userController);

app.use("/movies", movieController);

app.use("/theatres", theatreController);

app.use("/screens", screenController);

app.use("/shows", showController);

app.use("/seats", seatController);

// **************************************

const port = process.env.PORT || 1213;

app.listen(port, async (req, res) => {
  await connect();
  console.log("Hai i am listening on 1213");
});
