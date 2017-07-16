'use strict'

const express = require("express")
const api = express.Router()
const productController = require("../controllers/product")
const cors = require('cors')
api.get('/product', cors(),productController.getProducts)
api.get('/product/:productId',productController.getProduct)
api.post('/product', productController.addProduct)
api.put('/product/:productId', productController.updateProduct)
api.delete('/product/:productId',productController.deleteProduct)

module.exports = api