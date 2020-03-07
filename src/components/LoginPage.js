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
                I'm the Login Page
            </div>
        )
    }
}
