import {Component} from 'react'
import {setUser} from '../redux/authReducer'
import axios from 'axios'
import {connect} from 'react-redux'
import { useState, useEffect } from "react";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password: ''
        }
    }

//const Login = () => {
    //const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')

    handleEmail = (value) => {
        this.setState({email: value})
    }

    handlePassword = (value) => {
        this.setState({password: value})
    }

    handleRegister = () => {
        axios.post('/auth/register', {
            email: this.state.email,
            password: this.state.password
        })
        .then((results) => {
            this.props.setUser(results.data)
            this.props.history.push('/mysubscriptions')
        })
    }

    handleLogin = () => {
        axios.post('/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then((results) => {
            console.log('Login complete!')
            this.props.setUser(results.data)
            this.props.history.push('/mysubscriptions')
        })
    }

    render() {
        return (
            <div className='Auth'>
                <div className='authBox'>
                <p>Please Login or Create an Account.</p>
                <input
                    value = {this.state.email}
                    onChange = {(e) => this.handleEmail(e.target.value)}
                    placeholder = 'Enter Email'
                    type = 'email'
                    required
                    className='auth-input-box'
                />
                <input
                    value = {this.state.password}
                    onChange = {(e) => this.handlePassword(e.target.value)}
                    type = 'password'
                    placeholder = 'Enter Password'
                    required
                    className='auth-input-box'
                />
                <button className='auth-buttons'onClick={this.handleLogin}>Login</button>
                <button className='auth-buttons'onClick={this.handleRegister}>Create an Account</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {setUser})(Login)
