module.exports = (db) => {
    return (name , extention , nanoId , workspaceId) => {
        return new Promise((resolve , reject) => {
            db.createFile(name , extention , nanoId , workspaceId )
            .then(results => resolve(results))
            .catch(reject)
        })
    }
}