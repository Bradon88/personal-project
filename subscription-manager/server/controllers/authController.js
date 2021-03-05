const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')

const {PROJECT_EMAIL, PROJECT_PASSWORD} = process.env

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [result] = await db.user.check_user_exists(email)
        if(result){
            return res.status(409).send('That email is already registered.')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [user] = await db.user.register_user(email, hash)
        req.session.user = user
        //NODEMAILER
        try {
            const transporter = nodemailer.createTransport({
                service: 'mail.com',
                auth: {
                    user: PROJECT_EMAIL,
                    pass: PROJECT_PASSWORD
                }
            })
            await transporter.sendMail({
                from: PROJECT_EMAIL,
                to: email,
                subject: "Account Created!",
                text: "Thank you for joining Subscription Manager! This email is to confirm that your account has been created."
            })
        } catch(err) {
            console.log(err)
        } //END OF NODEMAILER
        return res.status(200).send(req.session.user)
    
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [user] = await db.user.check_user_exists(email)
        if(!user){
            return res.status(401).send('Incorrect login information.')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            return res.status(401).send('Incorrect login information.')
        }
        delete user.password
        req.session.user = user
        return res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
        this.props.history.push('/')
    },
    getUserSession: (req, res) => {
        if(!req.session.user){
            return res.status(401).send('Please log in.')
        }
        return res.status(200).send(req.session.user)
    },
    emailMiddleware: (req, res) => {
        if(req.body.email.includes('@')){
            return next() 
        } else {
            res.status(500).send('Invalid email.')
        }
    }
}