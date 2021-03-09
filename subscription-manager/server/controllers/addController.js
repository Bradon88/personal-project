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
};
