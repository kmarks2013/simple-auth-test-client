import React, { Component } from 'react'

export default class SignupPage extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange =(e) => {
        this.setState({  
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('signup submitted', this.state)
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} ></input>
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password}></input>
                    <input type="submit" value="Sing Up"></input>
                </form>
                <label>Have an Account?</label>
                <button onClick={() => this.props.redirect('login')}>Click to Login!</button>
            </div>
        )
    }
}
