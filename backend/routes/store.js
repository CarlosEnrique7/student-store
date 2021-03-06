const express = require("express");
const Store = require("../models/store");
const router = express.Router();
const { NotFoundError } = require("../utils/errors");

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

// get single item
router.get("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Store.fetchProductById(productId);
    if (!product) {
      throw new NotFoundError("Product not found");
    }
    res.json({ product });
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
