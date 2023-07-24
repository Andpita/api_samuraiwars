import { Router } from 'express';
import shogun from '../controllers/Shogun';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Rotas apenas demonstrativas:
router.get('/', shogun.index); //< Mostra todos usuários;
router.get('/:id', shogun.show); //< Mostra apenas um usuaŕio logado, não um especfico;

router.put('/:id', shogun.update2); //< atualiza o id especifico;

router.post('/', shogun.store);
router.put('/', loginRequired, shogun.update);
router.delete('/', loginRequired, shogun.delete);

export default router;
