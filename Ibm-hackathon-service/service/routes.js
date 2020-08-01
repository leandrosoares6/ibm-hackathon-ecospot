const express = require('express')
const routes = express.Router()

const CarController = require('./CarController')



routes.get('/Car', CarController.index)
routes.post('/Cars', CarController.store)



module.exports = routes