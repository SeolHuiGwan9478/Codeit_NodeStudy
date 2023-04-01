const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = new express();
const users = ['Tom', 'Andy', 'Jessica', 'Paul'];

app.get('/', (request, response) => {
    response.end('<h1>Welcome</h1>');
});

app.get('/users', (request, response) => {
    response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (request, response) => {
    const userName = users[request.params.id - 1];
    response.end(`<h1>${userName}</h1>`);
});

app.get('*', (request, response) => {
    response.end('<h1>Page Not Found</h1>');
});

app.listen(3000);