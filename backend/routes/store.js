const express = require("express");
const Store = require("../models/store");
const { NotFoundError } = require("../utils/errors");
const router = express.Router();

// list all transactions
router.get("/", async (req, res, next) => {
  try {
    const products = await Store.listProducts();
    res.json({ products });
  } catch (err) {
    next(err);
  }
});

// // create new order
router.post("/orders", async (req, res, next) => {
  try {
    console.log(req.body);
    const order = req.body.order;
    const newOrder = await Store.sendOrder(order);
    res.json({ order: newOrder });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
