/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    // Returns 1 if no number is given
    let ifNum = input.match(/^[0-9\./]{1,}/);
    if(!ifNum) {
      result = 1;
    } else {
      let num = ifNum.join('').split('');
      //returns null if numbr includes both a . and /
      if (num.includes('.') && num.includes('/')) {
        result = null
      } else if (num.includes('.')) {
        // Handles decimals
        if (num.toString().match(/\./g).length === 1) {
          result = eval(num.join(''));
        } else {
          result = null;
        }
      } else if (num.includes('/')) {
        // Handles fractions
        if (num.toString().match(/\//g).length === 1  && num.join('').indexOf('/') !== num.length - 1) {
          result = eval(num.join(''));
        } else {
          result = null;
        }
      } else {
        // Handles whole numbers
        result = parseInt(num.join(''));
      }
    }
   
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    // Returns null if no unit in input
    let ifUnit = input.match(/[a-z]{1,}$/i);
    if (!ifUnit) {
      result = null;
    } else {
      let unit = ifUnit.join('').toLowerCase();
      // Makes sure unit is valid
      if (
        unit === 'gal'
        || unit === 'l'
        || unit === 'lbs'
        || unit === 'kg'
        || unit === 'mi'
        || unit === 'km'
      ) {
        result = unit;
        //Returns null if invalid unit
      } else {
        result = null;
      }
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = null;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    let unitObj = {
      'gal': 'gallons',
      'l': 'liters',
      'lbs': 'pounds',
      'kg': 'kilograms',
      'mi': 'miles',
      'km': 'kilometers'
    };
    result = unitObj[unit];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = null;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
