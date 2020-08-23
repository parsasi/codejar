module.exports = (io , db) => {
    const getWorkspace = require('../controllers/getWorkspace')(db)
    require('dotenv').config()
    io.on('connection', (socket) => {
        const workspaceId = socket.handshake.query.workspaceId
        getWorkspace(workspaceId)
        .then(results => {
            const isAdmin = workspaceId === results[0].admin_code
            
        })
        .catch(console.log)
    });
    return io
}