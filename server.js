const app = require('./src/app')()
const PORT = process.env.PORT || 8080

const serverStartHandler = (err) => {
    !!err ? console.log(`ERROR : ${err}`) : console.log(`server is running on port ${PORT}`)
}

app.listen(PORT , serverStartHandler)