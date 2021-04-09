const User = require("../models/User")

const UserController = {
    findOne(req, res){
        User.findOne({"_id": req.params.id})
        .populate("Favourites")
        .then(user => res.send(user))
        .catch(err => res.status(404).send(err));
    },
    create(req, res){
        User.create(req.body)
        .then(user => res.status(201).send(user))
    }
}

module.exports = UserController