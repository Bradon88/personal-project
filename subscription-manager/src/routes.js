import {Switch, Route} from 'react-router-dom'
import Add from "./components/Add"
import Auth from './components/Auth'
import Header from './components/Header'
import mySubscriptions from './components/mySubscriptions'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/mysubscriptions' component={mySubscriptions} />
        <Route path='/add' component={Add} />
    </Switch>
)