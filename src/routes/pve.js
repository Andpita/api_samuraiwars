import { Router } from 'express';
import pve from '../controllers/Pve';

const router = new Router();

//Rotas apenas demonstrativas:
router.get('/', pve.index); //< Mostra todos usuários
//router.get('/:id', pve.show); //< Mostra apenas um usuaŕio logado, não um especfico
router.get('/:id', pve.random); //< Mostra random;

router.post('/', pve.store);
router.put('/:id', pve.update);
router.delete('/', pve.delete);

export default router;
