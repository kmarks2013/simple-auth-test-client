import React, { Component } from 'react'
import LoginPage from '../components/LoginPage'
import HomePage from '../components/HomePage'

export default class MainContainer extends Component {
    state = {
        page: 'login'
    }

    redirect = (page) => {
        this.setState({
            page: page
        })
    }

    componentDidMount() {
        console.log(localStorage.token)
        if (localStorage.token) {
            this.redirect('home')
        }
    }

    render() {
        switch(this.state.page){
            case 'login':
                return <LoginPage redirect={this.redirect} />
            case 'home':
                return <HomePage />
        }
    }
}
