const express = require("express");
const Store = require("../models/store");
const { NotFoundError } = require("../utils/errors");
const router = express.Router();

// list all products
router.get("/", async (req, res, next) => {
  try {
    const products = await Store.listProducts();
    res.json({ products });
  } catch (err) {
    next(err);
  }
});

// create new product
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const product = req.body.products;
    const newProduct = await Store.sendProduct(product);
    res.json({ products: newProduct });
  } catch (err) {
    next(err);
  }
});

// list all orders
router.get("/orders", async (req, res, next) => {
  try {
    const orders = await Store.listOrders();
    res.json({ orders });
  } catch (err) {
    next(err);
  }
});

// create new order
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
