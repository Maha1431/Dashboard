const productService = require('../Service/product.service');

module.exports = {
  getProducts: async (req, res) => {
    try {
      const products = await productService.connectAndFetchProducts();
      res.json(products [0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
