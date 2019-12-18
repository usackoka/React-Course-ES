import routerx from 'express-promise-router';
import CategoriaRouter from './categoria'

const router = routerx();

router.use('/categoria', CategoriaRouter);

export default router;