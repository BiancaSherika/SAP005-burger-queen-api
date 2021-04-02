const express = require('express')
const routes = require('./server/routes/index')
const cors = require("cors")
const dotenv = require('dotenv')
const port = process.env.PORT || 3000
const app = express()

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.get('*', (req, res) => {
  res.send('Hello World!!')
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})