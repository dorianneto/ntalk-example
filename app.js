var express = require('express')
  , load = require('express-load')
  , cookieParser = require('cookie-parser')
  , session = require('express-session')
  , bodyParser = require('body-parser')
	, app = express();

// Configurações
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

load('models')
	.then('controllers')
	.then('routes')
	.into(app);

app.listen(3000, function() {
  console.log('Ntalk Example online!');
});