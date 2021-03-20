require("dotenv").config();

const express = require("express");
const massive = require("massive");
const session = require("express-session");
const path = require('path')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

//HOSTING
app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

//CONTROLLERS
const authController = require("./controllers/authController");
const addController = require("./controllers/addController");

//USER SESSION
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

//DATABASE CONNECTION
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("Database Connected");
    app.listen(SERVER_PORT, () => console.log(`Server on port ${SERVER_PORT}`));
  })
  .catch((err) => console.log(err));

//AUTHENTICATION ENDPOINTS
app.post(
  "/auth/register",
  authController.emailMiddleware,
  authController.register
);
app.post("/auth/login", authController.login);
app.post("/auth/logout", authController.logout);
app.get("/auth/get_user_session", authController.getUserSession);

//CONTROLLER ENDPOINTS
app.get("/api/subs", addController.getSubs);
app.get("/api/sub-plans/:id", addController.getSubPlans);
app.get('/api/my-subs', addController.getMySubscriptions)
app.post('/api/subs/:sub_plan_id', addController.addSubs);
app.put('/api/subs/:my_subscriptions_id', addController.editSubs)
app.delete('/api/subs/:my_subscriptions_id', addController.deleteSubs)
