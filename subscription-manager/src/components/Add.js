import { useState, useEffect } from "react";
import axios from "axios";
import Subscriptions from "./Subscriptions";

const Add = () => {
  const [subs, setSubs] = useState([]);
  const [subPlans, setSubPlans] = useState([]);
  const [subPlanView, setSubPlanView] = useState(false);
  
  useEffect(() => {
      axios.get("/api/subs").then((res) => {
          setSubs(res.data);
        });
    }, []);

    const handleGetSubPlans = (id) => {
        axios.get(`/api/sub-plans/${id}`)
            .then((res) => {
            console.log(res.data);
            setSubPlans(res.data);
            setSubPlanView(true)
            })
            .catch((err) => console.log(err))
    }

    const handleAddSubscription = (singleSubPlan) => {
        const {sub_plan_id, sub_id} = singleSubPlan
        axios.post(`/api/subs/${sub_plan_id}`, {sub_id})
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    } 

  console.log(subs);
  return (
    <div>
      {subs.map((sub) => {
        return <Subscriptions sub={sub} key={sub.sub_id} handleGetSubPlans={handleGetSubPlans} subPlanView={subPlanView} subPlans={subPlans}/>;
      })}
      {subPlanView ? (
        <div>
            <h2>Subscription Plan Options</h2>
          {subPlans.map((singleSubPlan) => (
            <button onClick={() => handleAddSubscription(singleSubPlan)} className="plan-drop-down">
              {singleSubPlan.sub_plan_title} ${singleSubPlan.sub_price}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Add;
