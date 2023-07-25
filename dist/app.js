"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable func-names */
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _expressdelay = require('express-delay'); var _expressdelay2 = _interopRequireDefault(_expressdelay);

var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _user = require('./routes/user'); var _user2 = _interopRequireDefault(_user);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
var _pve = require('./routes/pve'); var _pve2 = _interopRequireDefault(_pve);
var _inventario = require('./routes/inventario'); var _inventario2 = _interopRequireDefault(_inventario);
var _equiped = require('./routes/equiped'); var _equiped2 = _interopRequireDefault(_equiped);
var _shogun = require('./routes/shogun'); var _shogun2 = _interopRequireDefault(_shogun);
var _market = require('./routes/market'); var _market2 = _interopRequireDefault(_market);

const whiteList = [
  "https://samuraiwars.online",
  "https://api.samuraiwars.online",
  "http://localhost:4001",
  "http://localhost:3000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_expressdelay2.default.call(void 0, 100));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _home2.default);
    this.app.use('/shogun/', _shogun2.default);
    this.app.use('/users/', _user2.default);
    this.app.use('/token/', _token2.default);
    this.app.use('/pve/', _pve2.default);
    this.app.use('/inventario/', _inventario2.default);
    this.app.use('/equiped/', _equiped2.default);
    this.app.use('/market/', _market2.default);
  }
}

exports. default = new App().app;
