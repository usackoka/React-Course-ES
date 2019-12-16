const express=require('express');
const app=express();

//para cuando se despliegue la aplicacion, reciba el puerto asignado automaticamente por el servidor
//de lo contrario toma el puerto por defecto 3000
app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'), ()=>{
    console.log('server on port '+app.get('port'));
});