module.exports = () => {
    const express = require('express')
    const app = express()
    const workspacesRoute = require('./routes/workspaces')()
    const bodyParser = require('body-parser')
    const path = require('path')
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser())
    
    app.use(express.static('public/build'))

    app.use('/ws' , workspacesRoute)


    app.get("*", (req, res) => {
        res.sendFile(path.resolve("./public/build", "index.html"));
    });
    
    return app;
}
