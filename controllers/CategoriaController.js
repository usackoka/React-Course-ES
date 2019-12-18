//todos los modelos de models
import models from '../models';

export default{
    //agregar una categoria
    add: async (req, res, next) => {
        //req argumento de solicitud http a la funcion
        //res  argumento de respuesta http
        //next argumento de devolucion de llamada
        try {
            //hago referencia al modelo categoria
            //crea un objeto de mongo con las especificaciones que vengan en el body del req
            //req a traves de ajax
            const reg = await models.Categoria.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //consultar una categoria, enviando el id
    query: async (req, res, next) => {
        try {
            //documentacion de los metodos de mongoose
            //https://mongoosejs.com/docs/queries.html
            const reg = await model.Categoria.findOne({_id:req.query._id});
            if(!reg){ //pregunto si el registro ya existe
                res.status(404).send({
                    message: 'El registro no existe'
                });
            }else{
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //listarlos
    list: async (req, res, next) => {
        try {
            //find all
            //const reg = await models.Categoria.find({});

            //me indica que va a buscar todos pero no me va a mostrar las propiedades
            //createAt y descripcion
            //const reg = await models.Categoria.find({},{createdAt:0,descripcion:0});
            
            //me indica que va a buscar todos pero solo me mostrara la propiedad nombre
            //const reg = await models.Categoria.find({},{nombre:1});

            //encuentra todas las categorias que tengan el nombre que se manda como parametro
            /*
            let valor = req.query.valor;
            const reg = await models.Categoria.find({'nombre':new RegExp(valor,'i')},{createAt:0})
            .sort({'createdAt':-1});
            */

           let valor = req.query.valor;
           const reg = await models.Categoria.find({
               $or:[
                   {'nombre':new RegExp(valor,'i')},
                   {'descripcion':new RegExp(valor,'i')}
                ]
                },{createAt:0})
           .sort({'createdAt':-1});

            //ordenar de forma descendente por el campo nombre
            //.sort({'nombre':-1});

            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //actualizarlos
    update: async (req, res, next) => {
        try {
            const reg = await models.Categoria.findByIdAndUpdate(
                {
                    //la categoria que quiero modificar
                    //su id tiene que ser igual al req.body._id
                    _id:req.body._id
                },
                {
                    //actualizo el nombre con el nombre que trae el body
                    nombre:req.body.nombre, 
                    //actualizo la descripcion
                    descripcion:req.body.descripcion
                });
                //its ok!, regreso el reg mediante json
                resizeTo.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //eliminar
    remove: async (req, res, next) => {
        try {
            const reg = await models.Categoria.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //activar categoria
    activate: async (req, res, next) => {
        try {
            const reg = await models.Categoria.findByIdAndUpdate({
                _id:req.body._id
            },{
                estado:1
            });
            res.status(200).jes(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //desactivar categoria
    deactivate: async (req, res, next) => {
        try {
            const reg = await models.Categoria.findByIdAndUpdate({
                _id:req.body._id
            },{
                estado:0
            });
            res.status(200).jes(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
}