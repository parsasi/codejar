const db = require('./database/database')

const app = require('./src/app')(db)
const PORT = process.env.PORT || 8080
const http = require('http').createServer(app)
let io = require('socket.io')(http)

const serverStartHandler = (err) => {
    !!err ? console.log(`ERROR : ${err}`) : console.log(`server is running on port ${PORT}`)
}

io = require('./src/socket/io')(io)

http.listen(PORT , serverStartHandler)

