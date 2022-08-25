const express = require("express");
const category = require("./filter");

const router = express.Router();

router.post("/", category);

module.exports = router;
