import { Router } from 'express';
import user from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Rotas apenas demonstrativas:
router.get('/', user.index); //< Mostra todos usuários;
router.get('/:id', user.show); //< Mostra apenas um usuaŕio logado, não um especfico;

router.put('/:id', user.update2); //< atualiza o id especifico;

router.post('/', user.store);
router.put('/', loginRequired, user.update);
router.delete('/', loginRequired, user.delete);

export default router;
