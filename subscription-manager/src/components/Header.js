import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Header = () => {
        return <div className='header'>
            <h2 className='title'>Subscription Manager</h2>
            <Link to='/' className='links'>Login/Signup</Link>
            <Link to='/mysubscriptions' className='links'>My Subscriptions</Link>
            <Link to='/add' className='links'>Add Subscription</Link>
                
        </div>
    }

    export default Header