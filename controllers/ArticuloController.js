import models from '../models';
import { model } from 'mongoose';

export default{
    add: async (req, res, next) => {
        try {
            const reg = await models.Articulo.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    query: async (req, res, next) => {
        try {
            const reg = await model.Articulo.findOne({_id:req.query._id})
           .populate('categoria',{nombre:1});
            if(!reg){
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
    list: async (req, res, next) => {
        try {
           let valor = req.query.valor;
           const reg = await models.Articulo.find({
               $or:[
                   {'nombre':new RegExp(valor,'i')},
                   {'descripcion':new RegExp(valor,'i')}
                ]
                },{createAt:0})
            //me va a buscar todos los articulos con su categoria
            //de la categoria solo quiero que me muestre el nombre
            //https://mongoosejs.com/docs/populate.html
           .populate('categoria',{nombre:1})
           .sort({'createdAt':-1});

            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    update: async (req, res, next) => {
        try {
            const reg = await models.Articulo.findByIdAndUpdate(
                {
                    _id:req.body._id
                },
                {
                    categoria:req.body.categoria,
                    codigo:req.body.codigo,
                    nombre:req.body.nombre, 
                    descripcion:req.body.descripcion,
                    precio_venta:req.body.req_precio_venta,
                    stock:req.body.stock
                });
                resizeTo.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    remove: async (req, res, next) => {
        try {
            const reg = await models.Articulo.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    activate: async (req, res, next) => {
        try {
            const reg = await models.Articulo.findByIdAndUpdate({
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
    deactivate: async (req, res, next) => {
        try {
            const reg = await models.Articulo.findByIdAndUpdate({
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