import routerx from 'express-promise-router';
import ArticuloController from '../controllers/ArticuloController';
import auth from '../middlewares/auth'

const router = routerx();

router.post('/add',auth.verifyAlmacenero,ArticuloController.add);
router.get('/query',auth.verifyAlmacenero,ArticuloController.query);
router.get('/queryCodigo',auth.verifyUsuario,ArticuloController.queryCodigo);
router.get('/list',auth.verifyAlmacenero,ArticuloController.list);
router.put('/update',auth.verifyAlmacenero,ArticuloController.update);
router.delete('/remove',auth.verifyAlmacenero,ArticuloController.remove);
router.put('/activate',auth.verifyAlmacenero,ArticuloController.activate);
router.put('/deactivate',auth.verifyAlmacenero,ArticuloController.deactivate);

export default router;