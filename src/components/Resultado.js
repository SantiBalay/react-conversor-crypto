import React, { Component } from 'react';

class Resultado extends Component {


    render() { 

        const moneda = this.props.moneda
        const data = this.props.data.quotes[`${moneda}`]

        return (  
            <div className="bg-success py-4">
                <div className="resumen text-light text-center">
                    <h2 className="mb-4"> Resumen Crypto </h2>

                    <p> El precio del {this.props.data.name} en {moneda} es de ${(data.price).toFixed(2)}</p>
                    <p> El cambio en la ultima hora es de {data.percent_change_1h}% </p>
                    <p> El cambio en las ultimas 24 horas es de {data.percent_change_24h}% </p>


                </div>
            </div>
        );
    }
}
 
export default Resultado;