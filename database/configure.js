const path = require('path')
require('dotenv').config({path:__dirname+'/../.env'})
const mysql = require("mysql")

const db = {
    _pool : mysql.createPool({
        connectionLimit : 1000,
        connectTimeout  : 60 * 60 * 1000,
        acquireTimeout  : 60 * 60 * 1000,
        timeout         : 60 * 60 * 1000,
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    }),
    query : (queryText , params) => {
        return new Promise((resolve , rejects) => {
            db._pool.getConnection((connectionError , connection) => {
                if(connectionError){
                    rejects(connectionError)
                    return
                }
                connection.query(queryText , params , (queryError ,results) => {
                    connection.release();
                    return queryError ? rejects(queryError) : resolve(results)
                })
            })
        })
    }
}

module.exports = db


//Below is a bad way of implementing a mysql connection since it creates and ends the connection with each query
//Connection pooling (current solution) automatically end and creates connections, as neccessery
// const db = {
//     _conn :  mysql.createConnection({
//         host: process.env.MYSQL_HOST,
//         user: process.env.MYSQL_USERNAME,
//         password: process.env.MYSQL_PASSWORD,
//         database: process.env.MYSQL_DB
//     }), 
//     _connect : () => {
//         return new Promise((resolve , reject) => {
//             db._conn.connect((e) => {
//                 e ? reject(e) : resolve()
//             })
//         })
//     },
//     _end : () => {
//         return new Promise((resolve , reject) => {
//             db._conn.end(e => {
//                 e ? reject(e) : resolve()
//             })
//         })
//     },
//     query : (queryText , params) => {
//         return new Promise((resolve , reject) => {
//             db._connect()
//             .then(_ => {
//                 db._conn.query(queryText , params , (err , results) => {
//                     db._end()
//                     .then(_ => console.log('Connection Closed'))
//                     .catch(e => console.log(e))
//                     .finally(_ => err ? reject(err) : resolve(results))
//                 })
//             }).catch(e => reject(e))
//         })
//     }
// }


// db.query('SELECT 1' , []).then(results => console.log(results)).catch(console.log)
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

