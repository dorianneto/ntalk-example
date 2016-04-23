module.exports = function(app) {
	var contato = app.controllers.contato;

	app.get('/contatos', contato.index);
	app.get('/contatos/:id', contato.show);
	app.post('/contatos', contato.create);
	app.get('/contatos/:id/editar', contato.edit);
	app.put('/contatos/:id', contato.update);
	app.delete('/contatos/:id', contato.destroy);
}