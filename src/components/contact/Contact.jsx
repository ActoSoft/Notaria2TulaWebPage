import React, { Component } from 'react'
import './contact.scss'

class Contact extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            "dummie": "Hola"
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

export default Contact