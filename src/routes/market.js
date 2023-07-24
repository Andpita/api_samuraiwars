import { Router } from 'express';
import market from '../controllers/Market';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, market.store);
router.put('/', loginRequired, market.update);
router.get('/:id', loginRequired, market.show);
router.get('/', loginRequired, market.index);

export default router;
