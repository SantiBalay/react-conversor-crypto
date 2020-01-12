import React, { Component } from 'react';
import Opcion from './Opcion'

class Form extends Component {

    monedaRef = React.createRef()
    cryptoRef = React.createRef()


    convertirMoneda = (e) => {
        e.preventDefault()

        const data = {
            moneda: this.monedaRef.current.value,
            crypto: this.cryptoRef.current.value
        }

        this.props.convertirMoneda(data)

    }
    
    render() { 

        const cryptosState = this.props.cryptos

        return (  
            <form onSubmit={this.convertirMoneda}>

                <div className="form-group">
                    <label>Moneda:</label>
                    <select ref={this.monedaRef} className="form-control">
                        <option value="" disabled defaultValue> Elegir Moneda</option>
                        <option value="USD"> Dolar Estadounidense</option>
                        <option value="ARS"> Peso Argentino</option>
                        <option value="MXN"> Peso Mexicano</option>
                        <option value="GBP"> Libra </option>
                        <option value="EUR"> Euro </option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Cryptomoneda:</label>
                    <select ref={this.cryptoRef} className="form-control">
                        { 
                            Object.keys(cryptosState).map( key => 
                                    <Opcion key={key} crypto={cryptosState[key]}/>
                            )
                        }
                    </select>

                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Cotizar"/>
                </div>
                
            </form>
        );
    }
}
 
export default Form;