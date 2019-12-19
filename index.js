//ES5 -> ES6
import express from 'express';
//const express=require('express');
//morgan: administrar peticiones desde el servidor o cliente
import morgan from 'morgan';
//const morgan = require('morgan');
//cors: permite recibir solicitudes remotas, no solo desde la misma PC
import cors from 'cors'
//const cors = require('cors');
import path from 'path';
import mongoose from 'mongoose';
//para gestion de rutas
import router from './routes'

//conexion a la base de datos MongoDB
mongoose.Promise = global.Promise;
//la base de datos dbsistema se creara automaticamente cuando se empiecen a crear los modelos de datos
const dbUrl = 'mongodb://localhost:27017/dbsistema';
mongoose.connect(dbUrl, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true})
.then(mongoose => console.log('Conectando a la BD en el puerto 27017'))
.catch(err => console.log(err));

const app=express();
app.use(morgan('dev'));
app.use(cors());

//para que admita recibir solicitudes en formato JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ruta de los archivos estaticos
app.use(express.static(path.join(__dirname,'public')));
//aqui viene la gestion de rutas
app.use('/api',router)

//para cuando se despliegue la aplicacion, reciba el puerto asignado automaticamente por el servidor
//de lo contrario toma el puerto por defecto 3000
app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('server on port '+app.get('port'));
    //console.log(path.join(__dirname,'public'));
}); 