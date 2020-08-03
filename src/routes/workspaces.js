const express = require('express')
const router = express.Router()

module.exports = (db) => {
    router.get('/create' , (req,res) => {
        const createWorkspace = require('../controllers/createWorkspace')(db)
        createWorkspace()
        .then(results => {
            res.json(results)
        })
        .catch(e => {
            res.statusCode = 500
            res.json({message : e})
        })
    })

    // router.get('/check')
    return router
}