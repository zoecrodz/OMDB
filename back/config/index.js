const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newomdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});