var home        = require('../controllers/home'),
    express     = require('express'),
    homeRoutes;

homeRoutes = function () {
    var router = express.Router();

    router.get('/', home.index);

    return router;
};

/*
  Expose homeRoutes
 */
module.exports = homeRoutes;