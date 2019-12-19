import routerx from 'express-promise-router';
import CategoriaRouter from './categoria'
import ArticuloRouter from './articulo'
import UsuarioRouter from './usuario'
import PersonaRouter from './persona'
import IngresoRouter from './ingreso'
import VentaRouter from './venta'

const router = routerx();

router.use('/categoria', CategoriaRouter);
router.use('/articulo', ArticuloRouter);
router.use('/usuario', UsuarioRouter);
router.use('/persona', PersonaRouter);
router.use('/ingreso', IngresoRouter);
router.use('/venta', VentaRouter);

export default router;