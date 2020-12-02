module.exports = (io , db) => {
    const getWorkspace = require('../controllers/getWorkspace')(db)
    require('dotenv').config()


    function getRoomAllClients(room){
        return new Promise((resovle,reject) => {
            io.of('/').in(room).clients(function(err,clients){
                if(err) reject(err)
    
                resovle(clients)
            });
        })
    }

    io.on('connection', (socket) => {
        const workspaceId = socket.handshake.query.workspaceId
        getWorkspace(workspaceId)
        .then(results => {
            const adminCode = results[0].admin_code
            socket.join(adminCode)
        })
        .catch(console.log) 
        
        socket.on('FILE_CHANGED' , async (data) => {
            const workspace = data.workspace
            delete data.workspace
            // const allClients = await getRoomAllClients(workspace)
            // console.log(allClients.length) 
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

