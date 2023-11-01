const express = require('express')
const { brandsControllers } = require('../controlles/controlles.brands')

const server = express()

server.get('/brands', brandsControllers.getControllersAndBrands)

server.post('/brands', brandsControllers.postControllersAndBrandsAndId)

server.delete('/brands' , brandsControllers.deleteControllersAndBrands)

module.exports = server