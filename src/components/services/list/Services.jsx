import React, { Component } from 'react'
import './services.scss'

class Services extends Component {

    constructor(props){
        super(props)
        this.state = {
            "dummie": "services"
        }
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <p>{this.state.dummie}</p>
        )
    }

}

export default Services