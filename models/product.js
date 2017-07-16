'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name : String,
    image : String,
    price: {type:Number,default:0},
    category : {type: String, enum : ['laptops','computers','phones']},
    description : String
})


module.exports = mongoose.model('Product', ProductSchema)