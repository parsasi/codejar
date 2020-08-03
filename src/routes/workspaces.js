const express = require('express')
const router = express.Router()

module.exports = (db) => {
    const createWorkspace = require('../controllers/createWorkspace')(db)
    router.get('/create' , (req,res) => {
        createWorkspace()
        .then(console.log)
        .catch(console.log)
    })
    return router
}