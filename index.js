'use strict'


const mongoose = require("mongoose")
const app = require("./app");
const config = require("./configuration/appConfig")
const resources = require("./resources/messages")

const messages = resources.getMessages('EN')
const port = config.port

mongoose.connect(config.db, (err, res) => {
    if (err) {
     return console.log(messages.app.connectionDbError.concat(` ${err}`))
    }

    console.log(messages.app.connectionDbOk)

    app.listen(port, () => {
        console.log(messages.app.apiRunOk.concat(` http://localhost:${port}`))
    })
})

