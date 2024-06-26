const express = require('express')
const empleadoRouter = express.Router();

//declaramos un objeto de nuestro modelo
let empleado = require('../models/Empleado')

//agregar un nuevo empleado
empleadoRouter.route('/agregar').post((req,res) =>{
    empleado.create(req.body)
    .then((data) =>{
        console.log('Se inserto un documento')
        res.send(data)
    })
    .catch((error) =>{
        console.error(error)
    })
})

//obtener todos los empleados de las base de datos
empleadoRouter.route('/empleados').get((req,res) =>{
    empleado.find()
    .then((data) =>{
        res.send(data)
    })
    .catch((error) =>{
        console.error(error)
    })
})

//obtenemos empleado por su ID
empleadoRouter.route('/empleado/:id').get((req,res) =>{
    empleado.findById(req.params.id)
    .then((data) =>{
        res.send(data)
    })
    .catch((error) =>{
        console.error(error)
    })
})

//actualizar un empleado
empleadoRouter.route('/actualizar/:id').put((req,res) =>{
    empleado.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data) =>{
        console.log('Se actualizo el documento')
        res.send(data)
    })
    .catch((error) =>{
        console.error(error)
    })
})

//eliminar un empleado
empleadoRouter.route('/eliminar/:id').delete((req,res) =>{
    empleado.findByIdAndDelete(req.params.id)
    .then((data) =>{
        console.log('Se elimino correctamente')
        res.send(data)
    })
    .catch((error) =>{
        console.error(error)
    })
})

module.exports = empleadoRouter;