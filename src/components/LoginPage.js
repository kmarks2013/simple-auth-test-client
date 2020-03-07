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
                    <input />
                    <input />
                    <input type='submit' value="Login" />
                </form>
            </div>
        )
    }
}
