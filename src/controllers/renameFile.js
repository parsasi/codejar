module.exports = (db) => {
    return (nanoId , name , extention , workspaceId) => {
        return new Promise((resolve,reject) => {
            const confirmWorkspace = require('./getUpdateFileContentAccess')(db)
           confirmWorkspace(workspaceId , nanoId)
           .then(results => {
               if(results){
                    db.renameFile(name , extention , nanoId)
                    .then(result => resolve(result))
                    .catch(e => {
                        reject(e)
                    })
               }else{
                   reject(new Error('Rename access to the file denied'))
               }
           })
           .catch(e => {
                reject(e)
           })
        })
    }
} 