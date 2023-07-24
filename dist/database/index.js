"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Pve = require('../models/Pve'); var _Pve2 = _interopRequireDefault(_Pve);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Inventario = require('../models/Inventario'); var _Inventario2 = _interopRequireDefault(_Inventario);
var _Shogun = require('../models/Shogun'); var _Shogun2 = _interopRequireDefault(_Shogun);
var _Market = require('../models/Market'); var _Market2 = _interopRequireDefault(_Market);
var _Message = require('../models/Message'); var _Message2 = _interopRequireDefault(_Message);

const models = [_User2.default, _Pve2.default, _Inventario2.default, _Shogun2.default, _Market2.default, _Message2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
