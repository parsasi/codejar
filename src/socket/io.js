module.exports = (io , db) => {
    const getWorkspace = require('../controllers/getWorkspace')(db)
    require('dotenv').config()
    io.on('connection', (socket) => {
        console.log(io.sockets.adapter.rooms)
        const workspaceId = socket.handshake.query.workspaceId
        getWorkspace(workspaceId)
        .then(results => {
            const adminCode = results[0].admin_code
            socket.join(adminCode)
        })
        .catch(console.log)
    });
    return io
}