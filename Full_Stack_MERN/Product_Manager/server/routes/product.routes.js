const productController = require('../controllers/product.controller');
const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get("/products", ProductController.allProducts);

    app.get("/products/:id", ProductController.oneProduct);

    app.post("/products", ProductController.newProduct);

    app.put("/products/:id", productController.updateProduct);

    app.delete("/products/:id", productController.deleteProduct);
}

