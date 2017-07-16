'use strict'

const httpStatus = { OK: 200, ERROR: 500, NOTFOUND: 404 } //TODO intentar hacer un ENUM
const port = process.env.PORT || 9000
const db = process.env.MONGODB || 'mongodb://localhost:27017/store'

module.exports = {
    httpStatus,
    port,
    db}