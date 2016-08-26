const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const port = 8080

app.use(favicon(__dirname + '/public/favicon.ico'))

app.use(express.static(path.join(__dirname, 'public')))

app.use("/css",  express.static(__dirname + '/public/css'))
app.use("/js", express.static(__dirname + '/public/js'))
app.use("/images",  express.static(__dirname + '/public/images'))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(port)
console.log(`Now listening on ${port}`)
