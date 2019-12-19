import jwt from 'jsonwebtoken';
import models from '../models';

//varifica si el token es valido, si no es valido uso este token para generar uno nuevo.
async function checkToken(token){
    let __id = null;
    try{
        const {_id}= await jwt.decode(token);
        __id = _id;
    } catch (e){
        return false;
    }
    const user = await models.Usuario.findOne({_id:__id,estado:1});
    if (user){
        const token = jwt.sign({_id:__id},'clavesecretaparagenerartoken',{expiresIn:'1d'});
        return {token,rol:user.rol};
    } else {
        return false;
    }
}

export default {
    //funcion para poder generar el token y poder trabajar con el a lo largo de la aplicacion
    encode: async (_id) => {
        //parametro _id hace referencia al id que se usara para generar el token
        //luego viene una clave para generar dicho token
        //luego el tiempo de expiracion del token 1dia, 2minutos etc...
        const token = jwt.sign({_id:_id},'clavesecretaparagenerartoken',{expiresIn: '1d'});
        return token;
    },
    //funcion para poder decodificar el token y ver que sea el correcto
    decode: async (token) => {
        try {
            //decodifico el token haciendo uso de la clave secreta
            const {_id} = await jwt.verify(token,'clavesecretaparagenerartoken');
            //busco el usuario con el id que encontre al que pertenece el token
            //tambien verifico que el usuario tengo estado = 1, que este activo
            const user = await models.Usuario.findOne({_id,estado:1});
            if (user){
                return user;
            } else{
                return false;
            }
        } catch (e){
            //si llega aqui es que posiblemente el token ya expiró entonces hago el check para verificar si aun es valido
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}