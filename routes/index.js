import routerx from 'express-promise-router';
import CategoriaRouter from './categoria'
import ArticuloRouter from './articulo'
import UsuarioRouter from './usuario'
import PersonaRouter from './persona'

const router = routerx();

router.use('/categoria', CategoriaRouter);
router.use('/articulo', ArticuloRouter);
router.use('/usuario', UsuarioRouter);
router.use('/persona', PersonaRouter);

export default router;