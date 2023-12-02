const express = require("express");
const router = express.Router();
//import the controller
const initializePayment = require("./controller");
//Define your routes

router.post("/acceptpayment", initializePayment.acceptPayment);
router.get("/health", initializePayment.mfoh);
module.exports = router;
