import mongoose, {Schema} from 'mongoose';

//esquema del modelo
const categoriaSchema = new Schema({
    nombre:{type:String, maxlength, maxlength:50, unique:true, required:true},
    descripcion:{type:String, maxlength:255},
    estado:{type:Number, default:1},
    createdAt:{type:Date, default:Date.now}
});

//para convertirlo a un modelo de mongoDB, le indico el nombre del modelo y en que esquema se va a basar
const Categoria = mongoose.model('categoria', categoriaSchema);

export default Categoria;