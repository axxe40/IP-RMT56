const errorHandler = require('./middlewares/errorhandler')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));



module.exports = app