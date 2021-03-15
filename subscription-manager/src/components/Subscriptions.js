import { useState, useEffect } from "react";
import axios from "axios";


const Subscriptions = (props) => {
  const { sub, handleGetSubPlans, subPlanView, subPlans } = props;


  return (
    <div className='sub-buttons-box'>
      <button onClick={() => handleGetSubPlans(sub.sub_id)}
              className='sub-buttons'
      >
        {sub.sub_title}
      </button>
      
    </div>
  );
};


export default Subscriptions
