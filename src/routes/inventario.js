import { Router } from 'express';
import inventarios from '../controllers/Inventario';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, inventarios.store);
router.put('/', loginRequired, inventarios.update);
router.get('/:id', loginRequired, inventarios.show);
router.get('/', loginRequired, inventarios.index);

export default router;
