const path = require('path')
require('dotenv').config({path:__dirname+'/../.env'})
const mysql = require("mysql")

const db = {
    conn :  mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    }), 
    connect : () => {
        return new Promise((resolve , reject) => {
            db.conn.connect((e) => {
                e ? reject(e) : resolve()
            })
        })
    },
    end : () => {
        return new Promise((resolve , reject) => {
            db.conn.end(e => {
                e ? reject(e) : resolve()
            })
        })
    },
    query : (queryText , params) => {
        return new Promise((resolve , reject) => {
            db.connect().then(_ => {
                db.conn.query(queryText , params , (err , results) => {
                    db.end().then(_ => console.log('Connection Closed')).catch(e => console.log(e)).finally(_ => err ? reject(err) : resolve(results))
                })
            }).catch(e => reject(e))
        })
    }

}


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

