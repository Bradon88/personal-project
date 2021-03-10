import {Switch, Route} from 'react-router-dom'
import Add from "./components/Add"
import Auth from './components/Auth'
import Header from './components/Header'
import MySubscriptions from './components/MySubscriptions'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/mysubscriptions' component={MySubscriptions} />
        <Route path='/add' component={Add} />
    </Switch>
)