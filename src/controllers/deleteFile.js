module.exports = (db) => {
    return (nanoId  , workspaceId) => {
        return new Promise((resolve , reject) => {
        const confirmWorkspace = require('./getUpdateFileContentAccess')(db)
           confirmWorkspace(workspaceId , nanoId)
           .then(results => {
               if(results){
                    db.deleteFile(nanoId)
                    .then(result => resolve(result))
                    .catch(e => {
                        reject(e)
                    })
               }else{
                   reject(new Error('Delete access to the file denied'))
               }
           })
           .catch(e => {
                reject(e)
           })
        })
    }
}