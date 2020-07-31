const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) =>{
    return response.json({ message: "hello world !, I'm your Bot assistant" });
});

routes.post('/new-organizations', (request, response) =>{
    console.log(request.body);
});

module.exports = routes;