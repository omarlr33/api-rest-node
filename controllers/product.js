'use strict'

const Product = require("../models/product")
const config = require("../configuration/appConfig.js")
const resources = require('../resources/messages.js')
const messages = resources.getMessages('ES')

function getProducts(req, res) {

    Product.find({}, (err, products) => {

        if (!products) return res.status(config.httpStatus.NOTFOUND).send({ message: messages.product.productsNotFound })

        if (err) return res.status(config.httpStatus.ERROR).send({ message: messages.product.productsGetError.concat(` ${err}`) })
            
        res.status(config.httpStatus.OK).send({ products })

    }) //objeto vacio para buscar todos
}

function getProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (!product) return res.status(config.httpStatus.NOTFOUND).send({ message: messages.product.productNotFound })

        if (err) return res.status(config.httpStatus.ERROR).send({ message: messages.product.productGetError.concat(` ${err}`) })

      
        res.status(config.httpStatus.OK).send({ product })
    })
}

function addProduct(req, res) {
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()

    product.name = req.body.name
    product.image = req.body.image
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStore) => {
        if (err) return res.status(config.httpStatus.ERROR).send({ message: messages.product.productAddError.concat(` ${err}`) })

        res.status(config.httpStatus.OK).send({ product: productStore })
    })
}

function updateProduct(req, res) {

    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update, { new: true }, (err, productUpdated) => {
        if (err) return res.status(config.httpStatus.ERROR).send({ message: messages.product.productUpdateError.concat(` ${err}`) })

        res.status(config.httpStatus.OK).send({ product: productUpdated })


    })
}
function deleteProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(config.httpStatus.ERROR).send({ message: messages.product.productDeleteError.concat(` ${err}`) })

        product.remove((err) => {
            if (err) return res.status(config.httpStatus.ERROR).send({ message: messages.product.productDeleteError.concat(` ${err}`) })

            res.status(config.httpStatus.OK).send({ message: messages.product.productDeleteOk })
        })
    })
}

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}