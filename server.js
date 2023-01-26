const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const { PORT, CLIENT_URL } = require('./src/constants')
const authRoutes = require('./src/routes/auth')
const passport = require('passport');
const cors = require('cors')
//import routes

//import passport middleware
require('./src/middlewares/passport-middleware')

//app starts listening on port 8000
console.log("PORT: ",PORT)
app.use(cors({ origin: CLIENT_URL, credentials: true }))

//initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(express.json());
app.use(cookieParser())
app.use(cors({origin: CLIENT_URL, credentials: true}))
app.use(passport.initialize())



//initialize routes
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