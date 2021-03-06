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
    getUpdateFileContentAccess : (workspaceId , nanoId) => {
        return db.query(`
            SELECT workspaces.id FROM workspaces
            JOIN files ON workspaces.id = files.workspace_id
            WHERE 
            files.nano_id = ?
            AND
            workspaces.admin_code = ?
            `
            , [nanoId , workspaceId])
    },
    getCreateFileAccess : (workspaceId) => {
        return db.query(`
            SELECT id FROM workspaces
            WHERE admin_code = ?
            ` , [workspaceId])
    },
    getWorkspaceFiles : (id) => {
        return db.query(`
            SELECT files.name , files.extention , files.nano_id
            FROM files
            JOIN workspaces ON files.workspace_id = workspaces.id
            WHERE workspaces.public_code = ? OR workspaces.admin_code = ? `,
            [id , id])
    },
    getWorkspace : (id) => {
        return db.query(`
            SELECT public_code , admin_code FROM workspaces
            WHERE public_code = ? OR admin_code = ?`
            ,[id , id])
    },
    getFileContent : (nanoId) => {
        return db.query(`
            SELECT content FROM files
            WHERE nano_id = ?`
            , [nanoId])
    },
    updateFileContent : (nanoId , newContent) => {
        return db.query(`
            UPDATE files SET content = ? , time_saved = CURRENT_TIMESTAMP
            WHERE nano_id = ?`
            , [newContent , nanoId])
    },
    createFile : (fileName , extention , nanoId , workspaceId , content) => {
        return db.query(`
            INSERT INTO files (name , extention , nano_id , workspace_id , content)
            VALUES 
            (? , ? , ? , ? , ?);
            ` , [fileName , extention , nanoId , workspaceId , content])
    },
    deleteFile : (nanoId) => {
        return db.query(`
            DELETE FROM files WHERE nano_id = ?`
            ,[nanoId])
    },
    renameFile : (fileName , extention , nanoId) => {
        return db.query(`
            UPDATE files SET name = ? , extention = ? WHERE nano_id = ?;
        `,[fileName , extention , nanoId])
    }
}