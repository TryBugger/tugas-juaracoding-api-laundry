const express = require("express");
const { ROUTER_BASE_LAUNDRY } = require("./laundry/laundry.config");
const { LaundryRouter } = require("./laundry/laundry.router");

// const { MongoDBConnection } = require("./libs/lib.database");

// MongoDBConnection();

const app = express();

app.use(express.json());
app.use(ROUTER_BASE_LAUNDRY, LaundryRouter)

module.exports = {
  app
}