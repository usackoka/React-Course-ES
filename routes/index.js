import routerx from 'express-promise-router';
import CategoriaRouter from './categoria'
import ArticuloRouter from './articulo'

const router = routerx();

router.use('/categoria', CategoriaRouter);
router.use('/articulo',ArticuloRouter);

export default router;