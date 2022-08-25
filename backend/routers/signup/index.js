const express = require("express");
const signup = require("./signup");

const router = express.Router();

router.post("/", signup);

module.exports = router;
