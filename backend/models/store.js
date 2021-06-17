const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class Store {
  static async listProducts() {
    // list all items in products
    const products = storage.get("products").value();
    return products;
  }

  static async listOrders() {
    // list all items in orders
    const orders = storage.get("orders").value();
    return orders;
  }

  static async sendOrder(order) {
    // create a new order

    if (!order) {
      throw new BadRequestError(`No order sent.`);
    }
    const requiredFields = ["email", "product", "quantity"];
    requiredFields.forEach((field) => {
      if (!order[field] && order[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required`);
      }
    });

    const orders = await Store.listOrders();
    const storeId = orders.length + 1;

    const newOrder = { id: storeId, ...order };

    storage.get("orders").push(newOrder).write();

    return newOrder;
  }

  static async sendProduct(product) {
    // create a new product

    if (!product) {
      throw new BadRequestError(`No product sent.`);
    }
    const requiredFields = ["name", "category", "image", "source", "description", "price"];
    requiredFields.forEach((field) => {
      if (!product[field] && product[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required`);
      }
    });

    const products = await Store.listProducts();
    const storeId = products.length + 1;

    const newProduct = { id: storeId, ...product };

    storage.get("products").push(newProduct).write();

    return newProduct;
  }
}

module.exports = Store;
