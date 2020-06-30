/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
    if (!initNum && !initUnit) {
      res.send('invalid number and unit');
    } else if (!initNum) {
      res.send('invalid number');
    } else if (!initUnit) {
      res.send("invalid unit");
    };
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      res.json({
        "initNum": initNum,
        "initUnit": initUnit,
        "returnNum": returnNum,
        "returnUnit": returnUnit,
        "string": `${initNum} ${convertHandler.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${convertHandler.spellOutUnit(returnUnit)}`
      });
    });
    
};
