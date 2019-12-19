import routerx from 'express-promise-router';
import IngresoController from '../controllers/IngresoController';
import auth from '../middlewares/auth';

const router=routerx();

router.post('/add',auth.verifyAlmacenero,IngresoController.add);
router.get('/query',auth.verifyAlmacenero,IngresoController.query);
router.get('/list',auth.verifyAlmacenero,IngresoController.list);
/*
router.put('/update',auth.verifyAlmacenero,IngresoController.update);
router.delete('/remove',auth.verifyAlmacenero,IngresoController.remove);
*/
router.put('/activate',auth.verifyAlmacenero,IngresoController.activate);
router.put('/deactivate',auth.verifyAlmacenero,IngresoController.deactivate);

export default router;