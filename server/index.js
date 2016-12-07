const express = require('express');
const http = require('http');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const app = express();
const routerComponent = require('./router/router_component')
const routerApi = require('./router/router_api')
const db = require('./database')

app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
routerComponent(app);
routerApi(app);





const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, function() {
  console.log('Server Listening on localhost:' + port);
});
