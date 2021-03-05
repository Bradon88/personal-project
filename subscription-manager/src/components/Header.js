import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Header = () => {
        return <div>
            <h2>Subscription Manager</h2>
            <Link to='/'>Login/Signup</Link>
            <Link to='/mysubscriptions'>My Subscriptions</Link>
            <Link to='/add'>Add Subscription</Link>
            <Link to='/editdelete'>Edit/Delete Subscription</Link>
        </div>
    }

    export default Header