import {useState, useEffect} from 'react'
import axios from 'axios'

const MySubscriptions = () => {
    const [subs, setSubs] = useState([])
    const [subPlanView, setSubPlanView] = useState(false)
    const [subPlans, setSubPlans] = useState([])
    const [mySubscriptionsId, setMySubscriptionsId] = useState(null)
    
    useEffect(() => {
        axios.get('/api/my-subs')
            .then((res) => {
            setSubs(res.data)
            console.log(res.data)
        })
    }, [])

    useEffect(() => {
        if(subs.length === 0){
            setSubPlans([])
            setSubPlanView(false)
        }
    }, [subs])

    const handleDelete = (my_subscriptions_id) => {
        axios.delete(`/api/subs/${my_subscriptions_id}`)
            .then((res) => {
            setSubs(res.data)
        })
        .catch((err) => console.log(err))
    }

    const handleEdit = (sub_plan_id) => {
        axios.put(`/api/subs/${mySubscriptionsId}`, {sub_plan_id})
            .then((res) => {
                setSubs(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }
    
    const handleToggleSubPlanView = (sub_id, my_subscriptions_id) => {
        setMySubscriptionsId(my_subscriptions_id)
        axios.get(`/api/sub-plans/${sub_id}`)
        .then((res) => {
        console.log(res.data);
        setSubPlans(res.data);
        setSubPlanView(true)
        })
        .catch((err) => console.log(err))
    }

    return <div>
        {subs.map(sub => {
            const {sub_title, sub_plan_title, sub_price, my_subscriptions_id, sub_id} = sub
            return (
            <div>
               <p>{sub_title}</p>
                <p>{sub_plan_title}</p>
                <p>${sub_price}</p>
                <button onClick={() => handleToggleSubPlanView(sub_id, my_subscriptions_id)}>Edit Plan</button>
                <button onClick={() => handleDelete(my_subscriptions_id)}>Delete Subscription</button>
            </div>
            )
        })}
        {subPlanView ? (
            <div className='plan-options-box'>
                <h2 className='plan-options-title'>Subscription Plan Options</h2>
                {subPlans.map((singleSubPlan) => (
                    <button onClick={() => handleEdit(singleSubPlan.sub_plan_id)} className='plan-button'>
                    {singleSubPlan.sub_plan_title} ${singleSubPlan.sub_price}
                    </button>
                ))}
            </div>
      ) : null}
    </div>
}

export default MySubscriptions