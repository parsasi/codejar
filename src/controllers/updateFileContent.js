module.exports = (db) => {
    return (nanoId , newContent , workspaceId) => {
        return new Promise((resolve , reject) => {
        const confirmWorkspace = require('./getUpdateFileContentAccess')(db)
           confirmWorkspace(workspaceId , nanoId)
           .then(results => {
               if(results){
                    db.updateFileContent(nanoId , newContent)
                    .then(result => resolve(result))
                    .catch(e => {
                        reject(e)
                    })
               }else{
                   reject(new Error('Write access to the file denied'))
               }
           })
           .catch(e => {
                reject(e)
           })
        })
    }
}