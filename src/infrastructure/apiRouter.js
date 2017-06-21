// Librerías externas
var express = require("express")
var router = express.Router()

// Librerías internas
var apiService = require("./services/apiService")

// Crear usuarios
router.post("/users", apiService.createUser)

// Obtener todos los usuarios
router.get("/users", apiService.getUsers)

// Obtener un usuario en específico
router.get("/users/:id", apiService.getUser)

// Actualizar un usuario en específico
router.put("/users/:id", apiService.updateUser)

// Borrar un usuario en específico
router.delete("/users/:id", apiService.deleteUser)

// Exportar el módulo de rutas para API
module.exports = router