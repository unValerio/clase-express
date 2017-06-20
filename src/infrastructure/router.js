// Librerías externas
var express = require("express")
var router = express.Router()

// Librerías internas
var webService = require("./services/webService")


// Rutas accesibles desde web
router.get("/", webService.home)

router.get("/perfil", webService.profile)


// Exportar mis rutas
module.exports = router