import {useState, useEffect} from 'react'
import axios from 'axios'

const MySubscriptions = () => {
    const [subs, setSubs] = useState([])
    useEffect(() => {
        axios.get('/api/my-subs')
        .then((res) => {
            setSubs(res.data)
            console.log(res.data)
        })
    }, [])

    return <div>
        {subs.map(sub => {
            const {sub_plan_id, sub_title, sub_plan_title, sub_price} = sub
            return (
            <div>
               <p>{sub_title}</p>
                <p>{sub_plan_title}</p>
                <p>${sub_price}</p>
                <button>Edit Plan</button>
                <button>Delete Subscription</button>
            </div>
            )
        })}
    </div>
}

export default MySubscriptions