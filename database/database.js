const db = require('./configure')
module.exports = {
    createWorkspace : (publicCode , adminCode , email = '') => {
        return db.query(`
        INSERT INTO workspaces 
        (public_code  , admin_code , owner_email)
        VALUES
        ( ? , ? , ?)`,
        [publicCode , adminCode , email])
    }
}