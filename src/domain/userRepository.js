var userEntity = require("./userEntity")

// data = {name(String), age(Number), email(String)}
exports.create = function(data, onSuccess, onError) {
	
	var user = new userEntity()
		user.name = data.name
		user.age = data.age
		user.email = data.email

	user.save(function(err, user) {
		if (err) return onError("Hubo un error al guardar: "+ err)
		else return onSuccess(user)
	})
}