import React, { Component } from 'react'

export default class SignupPage extends Component {

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <label>Username</label>
                    <input type="text" name="username"  ></input>
                    <label>Password</label>
                    <input type="password" name="password" ></input>
                    <input type="submit" value="Sing Up"></input>
                </form>
                <label>Have an Account?</label>
                <button onClick={() => this.props.redirect('login')}>Click to Login!</button>
            </div>
        )
    }
}
