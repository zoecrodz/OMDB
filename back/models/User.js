const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newomdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    mail: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    favourites: [{
      type: Schema.Types.ObjectId,
      ref: "Favourites"
    }]
})


const User = mongoose.model("User", userSchema);

module.exports = User;