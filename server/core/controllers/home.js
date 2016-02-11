var homeCtrl,
    _ = require('underscore'),
    fs = require('fs');

homeCtrl = {
  
  index: function (req, res) {
    res.render('home');
  }
}


module.exports = homeCtrl;