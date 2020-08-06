module.exports = (db) => {
    return (nanoId , newContent) => {
        return new Promise((resolve , reject) => {
            db.updateFileContent(nanoId , newContent)
            .then(results => resolve(results))
            .catch(e => {
                reject(e)
            })
        })
    }
}