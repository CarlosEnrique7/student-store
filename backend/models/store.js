const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class Store {
  static async listProducts() {
    // list all items in the transactions array
    const products = storage.get("products").value();
    return products;
  }

  static async sendOrder(order) {
    // create a new order

    if (!order) {
      throw new BadRequestError(`No order sent.`);
    }
    const requiredFields = ["email", "product", "quantity"];
    requiredFields.forEach((field) => {
      if (!order[field] && order[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in transaction`);
      }
    });

    const orders = await Store.listProducts();
    const storeId = orders.length + 1;

    const newOrder = { id: storeId, ...order };

    storage.get("products").push(newOrder).write();

    return newOrder;
  }
}

module.exports = Store;
