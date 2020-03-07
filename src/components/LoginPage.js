import React, { Component } from 'react'

export default class LoginPage extends Component {
    state = {
        usesrname: '',
        password: ''
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form>
                    <label>Username</label>
                    <input value={this.state.usesrname} name="Username"/>
                    <label>Password</label>
                    <input value={this.state.password} name="Password"/>
                    <input type='submit' value="Login" />
                </form>
            </div>
        )
    }
}
