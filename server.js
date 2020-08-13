const db = require('./database/database')

const app = require('./src/app')(db)
const PORT = process.env.PORT || 8080

const serverStartHandler = (err) => {
    !!err ? console.log(`ERROR : ${err}`) : console.log(`server is running on port ${PORT}`)
}

app.listen(PORT , serverStartHandler)