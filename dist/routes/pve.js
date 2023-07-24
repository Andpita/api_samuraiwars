"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Pve = require('../controllers/Pve'); var _Pve2 = _interopRequireDefault(_Pve);

const router = new (0, _express.Router)();

//Rotas apenas demonstrativas:
router.get('/', _Pve2.default.index); //< Mostra todos usuários
//router.get('/:id', pve.show); //< Mostra apenas um usuaŕio logado, não um especfico
router.get('/:id', _Pve2.default.random); //< Mostra random;

router.post('/', _Pve2.default.store);
router.put('/:id', _Pve2.default.update);
router.delete('/', _Pve2.default.delete);

exports. default = router;
