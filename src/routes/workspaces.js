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
        .catch(e => {
            console.log(e)
            res.statusCode = 500
            res.json({message : 'Something went wrong'})
        })
    })

    router.get('/content' , (req , res) => {
        const nanoId = req.query.nanoid
        if(!nanoId){
            res.statusCode = 400
            res.json({message : 'Parameter workspaceId is required, but not provided.'})
            return
        }
        const getFileContent = require('../controllers/getFileContent')(db)
        getFileContent(nanoId)
        .then(results => res.json(results))
        .catch(e => {
            console.log(e)
            res.statusCode = 500
            res.json({message : 'Something went wrong'})
        })
    })


    router.post('/content' , (req , res) => {
        const {nanoid : nanoId , content : fileContent , workspaceid : workspaceId} = req.body
        if(!nanoId && !fileContent){
            res.statusCode = 400
            res.json({message : 'Somthing went wrong.'})
            return
        }
        const updateFileContent = require('../controllers/updateFileContent')(db)
        updateFileContent(nanoId , fileContent , workspaceId)
        .then(_ => res.json())
        .catch(e => {
            res.statusCode = 500
            res.json({message : 'Somthing went wrong'})
        })
    })


    router.post('/file' , (req , res) => {
        const {nanoid : nanoId , name , extention , workspaceid :workspaceId , content} = req.body
        if(!(nanoId && name && extention && extention && workspaceId)){
            res.statusCode = 400
            res.json({message : 'Somthing went wrong.'})
            return
        }
        const createFile = require('../controllers/createFile')(db)
        createFile(name , extention , nanoId , workspaceId , content)
        .then(_ => res.json())
        .catch(e => {
            res.statusCode = 500
            res.json({message : 'Something went wrong'})
        })
    })


    router.delete('/file' , (req , res) => {
        const {nanoid : nanoId , workspaceid : workspaceId} = req.query
        if(!(nanoId && workspaceId)){
            res.statusCode = 400
            res.json({message : 'Somthing went wrong.'})
            return
        }

        const deleteFile = require('../controllers/deleteFile')(db)
        deleteFile(nanoId , workspaceId)
        .then(_ => res.json())
        .catch(e => {
            res.statusCode = 500
            res.json({message : 'Something went wrong'})
        })
    })

    router.post('/file/rename' , (req , res) => {
        const {nanoid : nanoId , name , extention , workspaceid : workspaceId} = req.body
        if(!(nanoId && name  && extention && workspaceId)){
            res.statusCode = 400
            res.json({message : "Somthing went wrong"})
            return
        }
        const renameFile = require('../controllers/renameFile')(db)

        renameFile(nanoId , name , extention , workspaceId)
        .then(_ => res.json())
        .catch(e => {
            console.log(e)
            res.statusCode = 500
            res.json({message : "something went wrong"})
        })
    })
    return router
}