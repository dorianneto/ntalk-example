var express = require('express')
  , routes = require('./routes');;
var app = express();

// Configurações
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set(express.static(__dirname + '/public'));

// Rotas
app.get('/', routes.index);
app.get('/usuarios', routes.user.index);

app.listen(3000, function() {
  console.log('Ntalk Example online!');
});