const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'))
const socketio = require('socket.io')
const expressServer = app.listen(8080)
const io = socketio(expressServer)
const helmet = require('helmet')
app.use(helmet())
console.log("express and server are listening to port 8080")

module.exports = {
    io,
    app
}