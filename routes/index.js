var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/* Get convert page */
router.get('/convert', function (req, res, next) {
   //var query = req.query; //Get the URL query string as an object
   var dollars = req.query.dollars; //How many dollars?
   var toCurrency = req.query.to_currency; // To what currency?

   var converted = dollars * exchangeRates[toCurrency]; //math!

   res.render('results', {
     dollars: dollars,
     toCurrency: toCurrency,
     converted: converted});

   //res.send(query); //we have to send something in response
});


/* GET about page */
router.get('/about', function (req, res, next) {
   res.render('about', { name : 'my awesome site'});
});

module.exports = router;
