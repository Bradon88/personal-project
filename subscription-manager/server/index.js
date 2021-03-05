require('dotenv').config()

const express = require('express')
const massive = require('massive')
const session = require('express-session')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())

//CONTROLLERS
const authController = require('./controllers/authController')
const mySubscriptionsController = require('./controllers/mySubscriptionsController')
const addController = require('./controllers/addController')
const editCancelController = require('./controllers/editCancelController')

//USER SESSION
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

//DATABASE CONNECTION
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Database Connected')
    app.listen(SERVER_PORT, () => console.log(`Server on port ${SERVER_PORT}`))
}).catch(err => console.log(err))

//AUTHENTICATION ENDPOINTS
app.post('/auth/register', authController.emailMiddleware, authController.register)
app.post('/auth/login', authController.login)
app.post('/auth/logout', authController.logout)
app.get('/auth/get_user_session', authController.getUserSession)

//CONTROLLER ENDPOINTS
// app.get('/api/subs', ctrl.getSubs)
// app.post('/api/subs', ctrl.addSubs)
// app.put('/api/subs:id', ctrl.editSubs)
// app.delete('/api/subs:id', ctrl.deleteSubs)
