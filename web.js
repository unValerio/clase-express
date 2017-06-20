// Librerías externas
var express = require("express")
var swig = require("swig")
var mongoose = require("mongoose")
var cors = require("cors")
var bodyParser = require("body-parser")

// Librería interno
var router = require("./src/infrastructure/router")
var apiRouter = require("./src/infrastructure/apiRouter")
var config = require("./config")

// Inicialización de express
var app = express()

// Configuraciones
app.set('view engine', 'swig')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Conectar a mongodb
mongoose.Promise = global.Promise
mongoose.connect(config.mongo_url)

// Carpeta pública
app.use(express.static("./public"))

// Routes
app.use("/", router)
app.use("/api", apiRouter)

// Error 404
app.use(function(req, res){
	res.status(404)

	// respond with html page
	if (req.accepts('html')) {
		return res.send("Página no encontrada")
	}

	// respond with json
	if (req.accepts('json')) {
		return res.json({ error: 'Recurso no encontrado' })
	}

	// default to plain-text. send()
	return res.type('txt').send('Not found')
})

// Inicializar Servidor
app.listen(config.port, function() {
	console.log('Node app is running on port ', config.port)
})
