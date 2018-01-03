let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('hello worlds')
})

const port = 3000
app.listen(port, () => console.info(`Running on http://localhost:${port}`))