var userRepository = require("../domain/userRepository")

// data = {name(String), age(Number), email(String)}
exports.create = function(data, onSuccess, onError) {

	if (data.age < 18)
		return onError("El usuario debe ser mayor de edad")
	else
		userRepository.create(data, onSuccess, onError)
}

exports.getUsers = function(onSuccess, onError) {
	
	userRepository.findAll(onSuccess, onError)

}

exports.getUser = function(id, onSuccess, onError) {
	
	userRepository.find(id, onSuccess, onError)

}

exports.updateUser = function(id, data, onSuccess, onError) {
	
	if (data.age < 18)
		return onError("El usuario debe ser mayor de edad")
	else{
		userRepository.find(id, function(user) {

			userRepository.update(user, data, onSuccess, onError)

		}, onError)
	}
}

exports.deleteUser = function(id, onSuccess, onError) {
	
	userRepository.find(id, function(user) {

		userRepository.delete(user, onSuccess, onError)
		
	}, onError)

}


