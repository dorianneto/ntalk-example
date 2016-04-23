module.exports = function(app) {
	var ContatoController = {
		index: function(req, res) {
			var usuario = req.session.usuario
				, contatos = usuario.contatos
				, parameters = {
					usuario: usuario,
					contatos: contatos
				};

			res.render('contato/index', parameters);
		},
		create: function(req, res) {
			var usuario = req.session.usuario
				, contato = req.body.contato;

			// Salva registro
			usuario.contatos.push(contato);

			res.redirect('/contatos');
		},
		show: function(req, res) {
			var id = req.params.id
				, contato = req.session.usuario.contatos[id]
				, parameters = {
					id: id,
					contato: contato
				};

			res.render('contato/show', parameters);
		},
		edit: function(req, res) {
			var id = req.params.id
				, usuario = req.session.usuario
				, contato = usuario.contatos[id]
				, parameters = {
					id: id,
					usuario: usuario,
					contato: contato
				};

			res.render('contato/edit', parameters);
		},
		update: function(req, res) {
			var id = req.params.id
				, usuario = req.session.usuario
				, contato = req.body.contato;

			// Atualiza registro
			usuario.contatos[id] = contato;

			res.render('contato/index');
		},
		destroy: function(req, res) {
			var id = req.params.id
				, usuario = req.session.usuario;

			usuario.contatos.splice(id, 1);

			res.render('contato/index');
		}
	};

	return ContatoController;
}