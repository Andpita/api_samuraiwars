"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Market = require('../controllers/Market'); var _Market2 = _interopRequireDefault(_Market);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default, _Market2.default.store);
router.put('/', _loginRequired2.default, _Market2.default.update);
router.get('/:id', _loginRequired2.default, _Market2.default.show);
router.get('/', _loginRequired2.default, _Market2.default.index);

exports. default = router;
