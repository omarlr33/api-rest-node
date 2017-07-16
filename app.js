'use strict'

const express = require("express")
const bodyParser = require("body-parser")
const apiRoutes = require("./routes")
const cors = require('cors')

const app = express()

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//End Middlewares
app.options('*',cors())
app.use('/api',apiRoutes)
module.exports = app

//TODO implementar cors
