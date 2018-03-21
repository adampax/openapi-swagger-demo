const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

//const PORT = process.env.PORT || 3006;
const PORT = 3006;

const swaggerUrl = 'http://127.0.0.1:10010/swagger';


var options = {
    swaggerUrl: swaggerUrl
};
  
app.use('/', swaggerUi.serve, swaggerUi.setup(null, options));

app.listen(PORT);

console.log('check out http://127.0.0.1:'+PORT);