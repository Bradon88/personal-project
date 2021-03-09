Subscription Manager

# MVP (minimal viable product)
Users can...
- register for an account
- login/logout
- create list of current subscriptions with reoccurring bill info.
- add subscriptions with specific plan and serach subscriptions
- edit current plans
- delete subscriptions


# DB
- SQL

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(500) NOT NULL
)

CREATE TABLE subscriptions (
    sub_id SERIAL PRIMARY KEY,
    img TEXT,
    title VARCHAR(50),
    price INT,
    user_id INT REFERENCES, users(user_id)
)


# SERVER
- Dependencies
    - massive
    - express
    - express-session
    - bcrypt
    - dotenv

- File Structure
    - server/
        - index.js
        - controllers/
            - authController.js
            - homeController.js
            - addController.js
            - editCancelController.js

- Auth Endpoints
    - register => app.post('/auth/register', auth.register, auth.emailMiddleware)
    - login => app.post('/auth/login', auth.login)
    - logout => app.post('/auth/logout', auth.logout)
    - getUserSession => ('/auth/get_user_session', auth.getUserSession)

- Index Endpoints
    - getSubs => app.get('/api/subs', ctrl.getSubs)
    - addSubs => app.post('/api/subs', ctrl.addSubs)
    - editSubs => app.put('/api/subs:id', ctrl.editSubs)
    - deleteSubs => app.delete('/api/subs:id', ctrl.deleteSubs)


# FRONTEND
- Dependencies
    - axios
    - redux
    - react-router-dom
    - react-redux
    - redux-promise-middleware

    - File Structure
        - src/
            - App.js
            - reset.css
            - routes.js
            - components/
                - Auth.js
                - Header.js
                - Home.js
                - Add.js
                - Edit.js
            - redux/
                - reducer.js
                - store.js 


# ICEBOX
- Different plan selections
- Allow a payment method option
- Keep and update the actual subscription from the app itself