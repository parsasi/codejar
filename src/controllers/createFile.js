module.exports = (db) => {
    return (name , extention , nanoId , workspaceId , content = '') => {
        return new Promise((resolve , reject) => {
            const getCreateFileAccess = require('./getCreateFileAccess')(db)
            getCreateFileAccess(workspaceId)
            .then(results => {
                //results will be the first row that is found with that admin_code
                if(results){
                    db.createFile(name , extention , nanoId , results.id , content)
                    .then(results => resolve(results))
                    .catch(reject)
                }else{
                    reject('Access denied')
                }
            })
            .catch(reject)
        })
    }
}