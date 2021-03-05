// module.exports = {
//     getSubs: async (req, res) => {
//         const db = req.app.get('db')
//         const subs = await db.get_subs()
//         res.status(200).send(subs)
//     },
//     addSubs: async (req, res) => {
//         const db = db.app.get('db')
//         const {sub_title, sub_price} = req.body
//         const {user_id} = req.session.user
//         if(!req.session.user) {
//             return res.status(401).send('Please login')
//             this.props.history.push('/')
//         }
//         const subs = await db.add_sub([sub_title, sub_price, user_id])
//         res.status(200).send(subs)
//     }
// }