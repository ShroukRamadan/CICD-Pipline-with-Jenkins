const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Welcom From Finial Project')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
