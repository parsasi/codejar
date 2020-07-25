module.exports = () => {
    const express = require('express')
    const app = express()
    const bodyParser = require('body-parser')
    const path = require('path')
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public/build'))
    app.use(bodyParser())

    app.get('/' , (req , res) => {
        res.send('Its ON');
    });
    return app;
}
