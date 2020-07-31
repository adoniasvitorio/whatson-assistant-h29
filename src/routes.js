const { Router } = require('express');
const organizationController = require('./controllers/OrganizationController');
const Organization = require('./models/Organization');
const OrganizationController = require('./controllers/OrganizationController');

const routes = Router();


routes.get('/', (request, response) =>{
    return response.json({ message: "hello world !, I'm your Bot assistant" });
});

routes.post('/new-organizations', OrganizationController.store);

module.exports = routes;