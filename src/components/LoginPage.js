import React, { Component } from 'react'

class LoginPage extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(parsedResponse => {
            console.log(parsedResponse)
            localStorage.setItem('token', parsedResponse.token)
            this.props.redirect('home')
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input value={this.state.username} name="username" onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
                    <input type='submit' value="login" />
                </form>
                <label>Don't have an Account?</label>
                <button onClick={() => this.props.redirect('signup')}>Click to Sign-Up</button>
            </div>
        )
    }
}

export default LoginPage