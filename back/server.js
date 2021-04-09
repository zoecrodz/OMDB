const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes")
const cors = require("cors");
const app = express();
require('./config')

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use("/api", routes);

app.listen(3002, () => console.log("Listening on port 3002"));