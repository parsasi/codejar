module.exports = (io , db) => {
    const getWorkspace = require('../controllers/getWorkspace')(db)
    require('dotenv').config()
    io.on('connection', (socket) => {
        const workspaceId = socket.handshake.query.workspaceId
        getWorkspace(workspaceId)
        .then(results => {
            const adminCode = results[0].admin_code
            socket.join(adminCode)
        })
        .catch(console.log) 
        
        socket.on('FILE_CHANGED' , (data) => {
            io.in(data.workspace).emit('FILE_CHANGES' , data) 
        })
        
    });

    
    return io
}