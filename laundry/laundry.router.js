const express = require("express");
const { LaundryList, LaundryCreate, LaundryDetail, LaundryUpdate, LaundryDelete } = require("./laundry.controller");


const LaundryRouter = express.Router();

LaundryRouter.get('/', LaundryList);
LaundryRouter.post('/', LaundryCreate);
LaundryRouter.get('/:id', LaundryDetail);
LaundryRouter.put('/:id', LaundryUpdate);
LaundryRouter.delete('/:id', LaundryDelete);

module.exports = {
  LaundryRouter
}