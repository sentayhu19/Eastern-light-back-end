const express = require('express')
const app = express();
const {PORT} = require('./src/constants')
const authRoutes = require('./src/routes/auth')

//app starts listening on port 8000
console.log("PORT: ",PORT)

//inisialize routes
app.use(express.json());
app.use('/api', authRoutes)

const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
        } catch(err){ 
console.log("OPPS! ERROR OCURED... ",err)
            }
    }
appStart()