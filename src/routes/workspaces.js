const express = require('express')
const router = express.Router()

module.exports = (db) => {
    //Creating a new workspace with new unique public and admin code
    //The codes are given as the response upon the creation of the record in the db
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

    //Getting the info about the files that exist inside a workspace
    //The file content is not included, since it will be lazy loaded    
    router.get('/files' , (req , res) => {
        const workspaceId = req.query.wsid;
        if(!workspaceId){
            res.statusCode = 400
            res.json({message : 'Parameter workspaceId is required, but not provided.'})
            return
        }
        const getWorkspace = require('../controllers/getWorkspace')(db)
        getWorkspace(workspaceId)
        .then(results => {
            if(results.length <= 0){
                res.statusCode = 404
                res.json({message : 'Cannot find the workspace with the id ' + workspaceId})
                return
            }
            const getWorkspaceFiles = require('../controllers/getWorkspaceFiles')(db)
            getWorkspaceFiles(workspaceId)
            .then(results => {
                res.json(results)
            })
        })
        .catch(e => {
            console.log(e)
            res.statusCode = 500
            res.json({message : 'Something went wrong'})
        })
       
    })

    router.get('/exists' , (req , res) =>{
        const workspaceId = req.query.wsid;
        if(!workspaceId){
            res.statusCode = 400
            res.json({message : 'Parameter workspaceId is required, but not provided.'})
            return
        }
        const getWorkspace = require('../controllers/getWorkspace')(db)
        getWorkspace(workspaceId)
        .then(results => {
            if(results.length < 1){
                res.statusCode = 404
                res.json({message : 'Cannot find the workspace with the id ' + workspaceId})
                return
            }
            const firstFoundRow = results[0]
            if(firstFoundRow.admin_code === req.query.wsid){
                res.json(firstFoundRow)
            }else{
                delete firstFoundRow.admin_code
                res.json(firstFoundRow)
            }
        })

    })

    return router
}