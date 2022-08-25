const express = require("express");
const accessverify = require("./accessverify");
const refreshverify = require("./refreshverify");
const router = express.Router();

router.post("/access", accessverify);
router.post("/refresh", refreshverify);
module.exports = router;
