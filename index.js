const express = require('express')
require('dotenv').config()
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req , res) => {
    res.send('this is login page')
} )
app.get('/u', (req, res) =>{
    res.send('<h1>loram</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})