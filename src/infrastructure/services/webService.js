var swig = require("swig")

exports.home = function(req, res) {
	res.send(swig.renderFile('./src/presenter/home.html', {
		title: "Home principal",
		author: "Sergio Vargas",
		frutas: ["Melón", "Sandía", "Manzana", "Plátano"],
		mifuncion: function(argumento) {
			return "El argumento es: "+argumento
		}
	}))
}

exports.profile = function(req, res) {
	res.send("<html></html>")
}