import mongoose, {Schema} from 'mongoose';

const categoriaSchema = new Schema({
    nombre:{type:String, maxlength, maxlength},
    descripcion:{},
    estado:{},
    createdAt:{}
});