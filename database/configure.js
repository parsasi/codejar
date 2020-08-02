require('dotenv').config()
const mysql = require("mysql")

const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

const connect = function(callback) {
    conn.connect(function(err) {
        callback(err)
    })
}




// function createMessage(userChannelId , content , callback ){
//     const sql = `INSERT INTO messages (content , user_channel_id) VALUES (?  , ? )`
//     conn.query(sql , [content , userChannelId] , (err , rows) => {
//         if(err) return callback(err)
//         const id = rows.insertId
//         conn.query('select  content AS message, created_time AS time from messages WHERE id = ? ' , [id] , callback)
//     })
// }

// function getMessages(callback) {
//     conn.query(`
//   SELECT * 
//   FROM group_chat
//   `,
//         callback)
// }

module.exports = {connect , }