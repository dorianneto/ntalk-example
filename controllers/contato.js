module.exports = function(app) {
	var ContatoController = {
		index: function(req, res) {
			var parameters = { usuario: req.session.usuario };

			res.render('contato/index', parameters);
		}
	};

	return ContatoController;
}