"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Shogun = require('../controllers/Shogun'); var _Shogun2 = _interopRequireDefault(_Shogun);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

//Rotas apenas demonstrativas:
router.get('/', _Shogun2.default.index); //< Mostra todos usuários;
router.get('/:id', _Shogun2.default.show); //< Mostra apenas um usuaŕio logado, não um especfico;

router.put('/:id', _Shogun2.default.update2); //< atualiza o id especifico;

router.post('/', _Shogun2.default.store);
router.put('/', _loginRequired2.default, _Shogun2.default.update);
router.delete('/', _loginRequired2.default, _Shogun2.default.delete);

exports. default = router;
