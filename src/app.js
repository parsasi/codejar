module.exports = (db) => {
    const express = require('express')
    const app = express()
    const workspacesRoute = require('./routes/workspaces')(db)
    const bodyParser = require('body-parser')
    const path = require('path')
    const cors = require('cors')
    const corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
      }
    app.use(cors(corsOptions));

    // app.use(express.json());
    // app.use(express.urlencoded({ extended: false }));
    
    //Bodyparser url decoding and json parsing
    app.use(bodyParser.urlencoded({
        extended: true
      }));
    app.use(bodyParser.json()); 
    
    // app.use(express.static('public/build'))

    app.use('/ws' , workspacesRoute)


    app.get("*", (req, res) => {
        res.sendFile(path.resolve("./public/build", "index.html"));
    });
    
    return app;
}
