const { Router } = require("express");

const iecho = require("./iecho");

const router = Router();

router.use("/iecho", iecho);

module.exports = router;
