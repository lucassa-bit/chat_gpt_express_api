require('dotenv').config();

const server = require('./app');

server.listen(process.env.PORT || 8080, () => {
  console.log(
    '---------------------------------\n\t Server iniciado... \n---------------------------------'
  );
});
