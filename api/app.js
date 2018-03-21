
var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var cors = require('cors');
module.exports = app; // for testing

app.use(cors());

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  //var port = process.env.PORT || 10010;
  var port = 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/lyrics']) {
    console.log('api running, try http://127.0.0.1:' + port+"/lyrics");
  }
});
