import { Router } from 'express';
import equiped from '../controllers/Equiped';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//router.post('/', loginRequired, inventarios.store);
router.put('/', loginRequired, equiped.update);
router.get('/id', loginRequired, equiped.show);
router.get('/', loginRequired, equiped.index);

export default router;
