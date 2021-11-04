const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()

app.use(cors())
app.use(express.json())

routes(app)

app.listen(8080, () => {
    console.log("Server is up!")
})

app.use( (err, req, res, next) => {
    if (!err) {
        next()
    } else if (err instanceof ValidationException) {
        res.status(400)
        res.json( { err: err.message } )
    } else {
        res.status(500)
        res.json( { err: "Não foi possível executar a requisição. " + err.message } )
    }
})