module.exports = (db) => {
    return (id) => {
        return new Promise((resolve , reject) => {
            db.getWorkspace(id)
            .then(results => resolve(results))
            .catch(reject)
        })
    }
}