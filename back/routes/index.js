const express = require("express");
const router = express.Router();
const userRoutes = require("./user");
const favouritesRoutes = require("./favourites");

router.use("/user", userRoutes);
// router.use("/favourite", favouritesRoutes);

module.exports = router;