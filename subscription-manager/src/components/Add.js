import { useState, useEffect } from "react";
import axios from "axios";
import Subscriptions from "./Subscriptions";
import {connect} from 'react-redux'

const Add = (props) => {
  const [subs, setSubs] = useState([]);
  const [subPlans, setSubPlans] = useState([]);
  const [subPlanView, setSubPlanView] = useState(false);

  useEffect(() => {
    console.log(props.authReducer.user_id)
    if(!props.authReducer.user_id){
      props.history.push('/')
    }
  }, [])
  
  useEffect(() => {
      axios.get("/api/subs").then((res) => {
          setSubs(res.data);
        })
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
    <div className='subs'>
      <div className='sub-list'>
      {subs.map((sub) => {
        return <Subscriptions sub={sub} key={sub.sub_id} handleGetSubPlans={handleGetSubPlans} subPlanView={subPlanView} subPlans={subPlans}/>;
      })}
      </div>
      {subPlanView ? (
        <div className='plan-options-box'>
            <h2 className='plan-options-title'>Subscription Plan Options</h2>
          {subPlans.map((singleSubPlan) => (
            <button onClick={() => handleAddSubscription(singleSubPlan)} 
                    className='plan-button'>
              {singleSubPlan.sub_plan_title} {singleSubPlan.sub_price}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapStateToProps)(Add)
