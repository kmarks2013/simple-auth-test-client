import React, { Component } from 'react'

export default class HomePage extends Component {

    state={
        username: ''
    }

    componentDidMount(){
        fetch(`http://localhost:3000/profile`, {
            headers: {
                Authorization: localStorage.token
            }
        })
        .then(res=> res.json())
        .then(profileInfo => {
            console.log(profileInfo)
            this.setState({
                username: profileInfo.username
            })
        })
    }

    logout = () => {
        localStorage.clear()
        this.props.redirect('login')
    }

    render() {
        console.log(this.state.username)
        return (
            <div>
                <h1>Hello {this.state.username}!</h1>
                <button onClick={() => this.logout()}>Logout</button>
            </div>
        )
    }
}
