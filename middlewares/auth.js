import tokenService from '../services/token';
export default {
    //verifica que el usuario sea valido
    verifyUsuario: async (req,res,next) => {
        //cada vez que un usuario realice una accion en la pagina, verificara que el usuario sea valido con su token
        //pregunto si existe un token de autenticacion
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        //que tenga un rol valido
        if (response.rol =='Administrador' || response.rol == 'Vendedor' || response.rol=='Almacenero'){
            //dejo continuar trabajando al usuario
            next();
        } else{
            //el usuario no tiene permisos
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },

    ///VERIFICAN LOS ROLES
    verifyAdministrador: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        if (response.rol =='Administrador'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyAlmacenero: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        if (response.rol =='Administrador' || response.rol=='Almacenero'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyVendedor: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        if (response.rol =='Administrador' || response.rol == 'Vendedor'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    }
}