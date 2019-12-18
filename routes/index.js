import routerx from 'express-promise-router';
import CategoriaRouter from './categoria'
import ArticuloRouter from './articulo'
import UsuarioRouter from './usuario'

const router = routerx();

router.use('/categoria', CategoriaRouter);
router.use('/articulo',ArticuloRouter);
router.use('/usuario', UsuarioRouter);

export default router;