// Librerías externas
var express = require("express")
var router = express.Router()

// Librerías internas
var apiService = require("./services/apiService")

// Crear rutas
router.post("/users", apiService.createUser)

// Exportar el módulo de rutas para API
module.exports = router