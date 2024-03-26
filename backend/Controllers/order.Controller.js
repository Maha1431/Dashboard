const orderService = require('../Service/order.service');

module.exports = {
  getOrders: async (req, res) => {
    try {
      const orders = await orderService.connectAndFetchOrder();
      res.json(orders [0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

getOrderById: async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderService.connectAndFetchOrderById(id);
    console.log(id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
};
