const express=require('express');
//morgan: administrar peticiones desde el servidor o cliente
const morgan = require('morgan');
//cors: permite recibir solicitudes remotas, no solo desde la misma PC
const cors = require('cors');

const app=express();
app.use(morgan('dev'));
app.use(cors());

//para que admita recibir solicitudes en formato JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//para cuando se despliegue la aplicacion, reciba el puerto asignado automaticamente por el servidor
//de lo contrario toma el puerto por defecto 3000
app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'), ()=>{
    console.log('server on port '+app.get('port'));
}); 