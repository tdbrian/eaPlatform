const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'eaplatform'
module.exports.db;

module.exports.connect = (fn) => {
    MongoClient.connect(url, (err, client) => {
        if (err) console.error(`Unable to connect to ${url} ${dbName}`)
        console.log("Connected successfully to eaplatform db")
        const _db = client.db(dbName)
        module.exports.db = _db
        fn(_db, client)
    })
}

