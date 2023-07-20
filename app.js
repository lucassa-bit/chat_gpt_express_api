// ------------------------------------- Initialization ------------------------------- //
const Express = require('express');

const gpt_route = require(`./routes/gpt_route`);

const server = new Express();
// ------------------------------------- Middleware ------------------------------- //

if (process.env.NODE_ENV === 'development') {
  server.use(require('morgan')('dev'));
}

server.use(Express.json());

// Expense route
server.use('/api/v1/gpt', gpt_route);

module.exports = server;
