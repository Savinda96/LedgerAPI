const express = require("express");
const router = express.Router();
const ledgerService = require("./ledger.service");

router.get("/", calculator); //Get resquest on index handle by calculator
module.exports = router;

function calculator(req, res, next) {
  ledgerService
    .ledgerCalculator(req.query)
    .then((mydata) => {
      res.json(mydata);
      res.status(200);
    })
    .catch((err) => next(err));
}
