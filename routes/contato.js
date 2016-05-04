module.exports = function(app) {
	var contato    = app.controllers.contato
	, autenticador = require('../middleware/autenticador');

	app.get('/contatos', autenticador, contato.index);
	app.get('/contatos/:id', autenticador, contato.show);
	app.post('/contatos', autenticador, contato.create);
	app.get('/contatos/:id/editar', autenticador, contato.edit);
	app.put('/contatos/:id', autenticador, contato.update);
	app.delete('/contatos/:id', autenticador, contato.destroy);
}