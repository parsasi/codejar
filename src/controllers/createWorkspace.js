const uuid = require('../helpers/uuid')

module.exports =  (db) => {
    return () => {
        return new Promise((resolve , reject) => {
            const adminCode = uuid()
            const publicCode = uuid()
            db.createWorkspace(publicCode , adminCode)
            .then(_ => resolve({adminCode , publicCode}))
            .catch(reject)
        })
    }
}