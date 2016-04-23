var express      	 = require('express')
	, load           = require('express-load')
	, cookieParser   = require('cookie-parser')
	, session        = require('express-session')
	, bodyParser     = require('body-parser')
	, methodOverride = require('method-override')
	, app            = express();

// Configurações
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

load('models')
	.then('controllers')
	.then('routes')
	.into(app);

// more middleware (executes after routes)
app.use(function(req, res, next) {});

// error handling middleware
app.use(function(err, req, res, next) {
	console.log(err);
});

app.listen(3000, function() {
  console.log('Ntalk Example online!');
});