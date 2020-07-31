const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://wtn-h29:wtn-h29@cluster0.t2jhc.mongodb.net/wtnh29?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.get('/', (request, response) =>{
    return response.json({ message: "hello world !, I'm assistant bot" });
});

app.listen(3333);