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

exports.findAll = function(onSuccess, onError) {
	
	userEntity.find({}).exec(function(err, users) {
		if (err) return onError("Hubo un error al obtener usuarios: "+ err)
		else return onSuccess(users)
	})

}

exports.find = function(id, onSuccess, onError) {
	
	userEntity.findOne({"_id": id}).exec(function(err, user) {
		if (err) return onError("Hubo un error al obtener el usuario "+id+": "+err)
		else return onSuccess(user)
	})

}

exports.update = function(id, data, onSuccess, onError) {
	// body...
}


