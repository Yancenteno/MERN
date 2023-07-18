const Product = require('../models/product.model')

module.exports = {
    allProducts: (req, res) => {
        Product.find()
            .then(products => {
                res.json(products)
            })
            .catch(err => {
                res.json(err)
            })
    },

    oneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(product => {
                res.json(product)
            })
            .catch(err => {
                res.json(err)
            })
    },

    newProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                res.json(newProduct)
            })
            .catch(err => {
                res.json(err)
            })
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(product => {
                res.json(product)
            })
            .catch(err => {
                res.json(err)
            })
    },

    deleteProduct: (req, res) => {
        Product.findByIdAndDelete({ _id: req.params.id })
            .then(product => res.json(product))
            .catch(err => res.json(err))
    }
}