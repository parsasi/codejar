const db = require('./configure')
module.exports = {
    createWorkspace : (publicCode , adminCode , email = '') => {
        return db.query(`
            INSERT INTO workspaces 
            (public_code  , admin_code , owner_email)
            VALUES
            ( ? , ? , ?)`,
            [publicCode , adminCode , email])
    },
    getWorkspaceFiles : (id) => {
        return db.query(`
                SELECT files.name , files.extention , files.nano_id
                FROM files
                JOIN workspaces ON files.workspace_id = workspaces.id
                WHERE workspaces.id = ? `,
                [id])
    }
}