const express = require ("express")
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000

const shipRoute = require('./routes/ship.routes')
const typeRoute = require('./routes/type.routes')
const featureRoute = require('./routes/feature.routes')

const app = express()
app.use(helmet())
app.use(cors())

// cambiar body-parser por express.bodyparser 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())


app.get("/", (req, res) =>{
    res.send("Hello Word!")
})

app.use('/v1/api/ship', shipRoute)
app.use('/v1/api/type', typeRoute)
app.use('/v1/api/feature', featureRoute)

app.listen(port, ()=> {
    console.log("server running on port", port)
})  


module.exports = app