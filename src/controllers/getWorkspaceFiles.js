module.exports = (db) => {
    return (id) => {
        return new Promise((resolve , reject) => {
            db.getWorkspaceFiles(id)
            .then(results => resolve(results))
            .catch(reject)
        })
    }
}