var userApp = require("../../application/userApp")

exports.createUser = function(req, res) {

	var data = req.body

	userApp.create(data, function(user) {
		res.status(201)
		res.json({
			status: "success",
			message: "Usuario creado correctamente",
			user: user
		})
	}, function(err) {
		res.status(400)
		res.json({
			status: "failure",
			message: err
		})
	})
}