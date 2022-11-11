let http = require('http')
let server = http.createServer(function (req, res) {
    // This callback handles each incoming request 
})

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(3000)
