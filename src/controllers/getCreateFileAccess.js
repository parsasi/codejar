module.exports =  (db) => {
    return (workspaceId) => {
        return new Promise((resolve , reject) => {
            db.getCreateFileAccess(workspaceId)
            .then(results => {
                if(results[0]){
                    resolve(results[0])
                }else{
                    resolve(false)
                }
            })
            .catch(reject)
        })
    }
}