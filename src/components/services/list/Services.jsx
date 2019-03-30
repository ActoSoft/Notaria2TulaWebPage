import React, { Component } from 'react'
import './services.scss'

class Services extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    categoria: "Transmisiones de propiedad/bienes inmuebles",
                    tramites: [
                        "Jornada Notarial",
                        "Compraventa",
                        "Donación",
                        "Adjudicación por herencia",
                        "Constitución de condominio",
                        "Cancelación de hipoteca",
                        "Fideicomiso"
                    ]
                },
                {
                    categoria: "Sucesiones",
                    tramites: [
                        "Adjudicación por herencia",
                        "Asesoría Jurídica",
                        "Cesión de derechos hereditarios"
                    ]
                },
                {
                    categoria: "Constitución de sociedades",
                    tramites: [
                        "Sociedad Anónima de Capital Variable",
                        "Sociedad de Responsabilidad Limitada",
                        "Sociedad Anónima Promotora de Inversión",
                        "Sociedad Civil",
                        "Asociación Civil"
                    ]
                },
                {
                    categoria: "Testamento",
                    tramites: [
                        "Spetiembre y Octubre, mes del testamento"
                    ]
                },
                {
                    categoria: "Trámites diversos",
                    tramites: [
                        "Sociedad Anónima de Capital Variable",
                        "Sociedad de Responsabilidad Limitada",
                        "Sociedad Anónima Promotora de Inversión",
                        "Sociedad Civil",
                        "Asociación Civil"
                    ]
                },
            ],
            idcategoriaActual: 0
        }
    }


    render() {
        return (
            <div className="tramites-container">
                <div className="--sidebar">
                    <div className="options">
                        {this.state.data.map((category, index)=>(
                            <p 
                            key={index + category.categoria}
                            onClick={this.changeActualCategory}>
                                {category.categoria}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default Services