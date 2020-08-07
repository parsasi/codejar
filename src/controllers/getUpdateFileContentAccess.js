module.exports = (db) => {
    return (workspaceId , nanoId) => {
        return new Promise((resolve , reject) => {
            db.getUpdateFileContentAccess(workspaceId , nanoId)
            .then(results => {
               if(results[0]){
                   resolve(true)
               }
               else{
                   resolve(false)
               }
            })
            .catch(e => {
                reject(e)
            })
        })
    }
}