const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newomdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const favouritesSchema = new Schema({
    movieId: {
      type: Number,
      required: true
    }
})

const Favourites = mongoose.model("Favourites", favouritesSchema);
module.exports = Favourites;