const express = require('express');
const router = express.Router();

const controle= require("./controllers/control");

router.post("/send",controle.info);
router.get("/receive",controle.receive);

module.exports = router;