const errorHandler = require("./middlewares/errorhandler");
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers/index");

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

module.exports = app;
