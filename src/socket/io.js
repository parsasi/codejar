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
            const workspace = data.workspace
            delete data.workspace
            socket.to(workspace).emit('FILE_CHANGES' , data) 
        })
        
        socket.on('FILE_CREATED' , (data) => {
            const workspace = data.workspace
            delete data.workspace
            socket.to(workspace).emit('FILE_CREATED' , data)
        })

        socket.on('FILE_RENAMED' , (data) => {
            const workspace = data.workspace
            delete data.workspace
            socket.to(workspace).emit('FILE_RENAMED' , data)
        })

        socket.on('FILE_DELETED' , (data) => {
            const workspace = data.workspace
            delete data.workspace
            socket.to(workspace).emit('FILE_DELETED' , data)
        })
    });
   
    return io
}