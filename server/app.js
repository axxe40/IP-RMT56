

const errorHandler = require('./middlewares/errorhandler')
const express = require('express')
const app = express()
const router = require('./routers/index')

app.use(express.urlencoded({ extended: true }));

app.use(router)
app.use(errorHandler)


module.exports = app