//todos los modelos de models
import models from '../models';
import { model } from 'mongoose';

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
        } catch (error) {
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
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //listarlos
    list: async (req, res, next) => {
        try {
            const reg = await models.Categoria.find({});
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
        } catch (error) {
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
        } catch (error) {
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
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
}