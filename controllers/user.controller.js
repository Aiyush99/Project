const express = require("express");

const router = express.Router();

const User = require("../models/user");

router.post("/save", (req, res) => {
  const user = new User({
    painlevel: req.body.painlevel,
  });

  user
    .save()
    .then(() => res.json("user successfull"))
    .catch((err) => res.json("error in post" + err));
});
module.exports = router;
