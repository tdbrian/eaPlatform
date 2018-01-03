let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let db = require('./mongodb')
let applicationRoutes = require('./applications/applications.routes') 

db.connect((db, dbClient) => {
    app.use(bodyParser.json())
    app.get('/', (req, res) => res.send('API'))
    app.use('/applications', applicationRoutes)

    const port = 3000
    app.listen(port, () => console.info(`Running on http://localhost:${port}`))

    process.on('exit', () => {
        console.info('closing db connection and exiting')
        dbClient.close()
    })
})