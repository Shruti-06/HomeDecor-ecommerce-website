const express = require("express");
const router = express.Router();

const {createOrder} = require("../controllers/order");

router.post("/order/create", createOrder);

module.exports = router;