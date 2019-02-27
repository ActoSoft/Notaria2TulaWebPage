import React, { Component } from 'react'
import './service.scss'

class Service extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "dummie": "service"
        }
    }

    componentDidMount = () => {

    }

    componentWillReceiveProps = () => {

    }

    render() {
        return (
            <p>{this.state.dummie}</p>
        )
    }

}

export default Service
