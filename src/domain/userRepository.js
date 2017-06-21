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
		else if(user === null)  return onError("El usuario no existe: "+id)
		else return onSuccess(user)
	})

}

exports.update = function(user, data, onSuccess, onError) {
	
	user.name = (data.name != null) ? data.name : user.name
	user.age = (data.age != null) ? data.age : user.age
	user.email = (data.email != null) ? data.email : user.email

	user.save(function(err, user) {
		if (err) return onError("Hubo un error al actualizar: "+ err)
		else return onSuccess(user)
	})

}

exports.delete = function(user, onSuccess, onError) {
	
	user.remove(function(err) {
		if (err) return onError("Hubo un error al borrar al usuario "+user._id+": "+err)
		else return onSuccess()
	})

}


