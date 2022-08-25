const express = require("express");
const category = require("./category");

const router = express.Router();

router.post("/", category);

module.exports = router;
