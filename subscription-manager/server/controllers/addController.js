module.exports = {
  getSubs: async (req, res) => {
    const db = req.app.get("db");
    const subs = await db.subscriptions.get_subs();
    res.status(200).send(subs);
  },
  getSubPlans: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const subPlans = await db.subscriptions.get_sub_plans(id);
    res.status(200).send(subPlans);
  },
  addSubs: async (req, res) => {
      const {sub_plan_id} = req.params
      const {sub_id} = req.body
      const {user_id} = req.session.user
      const db = req.app.get('db')
      const addSubs = await db.subscriptions.add_sub({sub_plan_id, sub_id, user_id})
      res.sendStatus(200)
  },
  getMySubscriptions: async (req, res) => {
      const db = req.app.get('db')
      const {user_id} = req.session.user
      const mySubscriptions = await db.subscriptions.get_my_subs(user_id)
      res.status(200).send(mySubscriptions)
  },
  
};
