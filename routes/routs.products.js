const express = require('express')
const { controllers } = require('../controlles/controlles.products')

const server = express()

server.get('/products' , controllers.getControllers)

server.get('/products/:id' , controllers.getControllersAndId )

server.post('/products' , controllers.postControllers)

server.delete('/products/:id,' , controllers.deleteControllersAndId)

module.exports = server