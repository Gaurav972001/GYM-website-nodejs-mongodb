const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller= require('../controller/controller');

//API
route.get('/', services.home);
route.get('/about', services.about);
route.get('/fit-cal', services.cal);
route.get('/contact', services.contact);
route.post('/submit', controller.create);



module.exports = route