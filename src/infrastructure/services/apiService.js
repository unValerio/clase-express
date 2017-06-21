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

exports.getUsers = function(req, res) {
	
	userApp.getUsers(function(users) {
		res.json({
			status: "success",
			users: users
		})
	}, function(err) {
		res.status(400)
		res.json({
			status: "failure",
			message: err
		})
	})
}

exports.getUser = function(req, res) {
	
	var id = req.params.id

	userApp.getUser(id, function(user) {
		
		res.json({
			status: "success",
			user:user
		})

	}, function(err) {
		res.status(400)
		res.json({
			status: "failure",
			message: err
		})
	})

}

exports.updateUser = function(req, res) {
	
	var id = req.params.id
	var data = req.body

	userApp.updateUser(id, data, function(user) {
		
		res.json({
			status: "success",
			message: "Usuario actualizado",
			user:user
		})

	}, function(err) {
		res.status(400)
		res.json({
			status: "failure",
			message: err
		})
	})

}

exports.deleteUser = function(req, res) {

	var id = req.params.id
	
	userApp.deleteUser(id, function() {
		
		res.json({
			status: "success",
			message: "Usuario eliminado"
		})

	}, function(err) {
		res.status(400)
		res.json({
			status: "failure",
			message: err
		})
	})

}



