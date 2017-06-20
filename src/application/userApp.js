var userRepository = require("../domain/userRepository")

// data = {name(String), age(Number), email(String)}
exports.create = function(data, onSuccess, onError) {

	if (data.age < 18)
		return onError("El usuario debe ser mayor de edad")
	else
		userRepository.create(data, onSuccess, onError)
}
