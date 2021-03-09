import { useState, useEffect } from "react";
import axios from "axios";

const Subscriptions = (props) => {
  const { sub } = props;
  const [subPlans, setSubPlans] = useState([]);
  const [subPlanView, setSubPlanView] = useState(false);
  useEffect(() => {
    axios.get(`/api/sub-plans/${sub.sub_id}`).then((res) => {
      console.log(res.data);
      setSubPlans(res.data);
    });
  }, []);

  return (
    <div>
      <button onClick={() => setSubPlanView(!subPlanView)}>
        {sub.sub_title}
      </button>
      {subPlanView ? (
        <div>
          {subPlans.map((singleSubPlan) => (
            <p className="plan-drop">
              {singleSubPlan.sub_plan_title} ${singleSubPlan.sub_price}
            </p>
          ))}
          <button>Add Subscription</button>
        </div>
      ) : null}
    </div>
  );
};

export default Subscriptions;
