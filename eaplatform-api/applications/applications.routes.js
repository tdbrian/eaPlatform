let router = require('express').Router()
let mongo = require('../mongodb')

let getCollection = () => mongo.db.collection('applications')

router.get('/', async (req, res) => {
  let results = await getCollection().find({}).toArray();
  res.send(results)
})

router.post('/', async (req, res) => {
  await getCollection().insertOne({
    name: 'My new project'
  })
  res.send({
    status: 'saved'
  })
})

module.exports = router