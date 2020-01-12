import React, { Component } from 'react';

import Header from './Header'
import Form from './Form'
import Resultado from './Resultado'

import Axios from 'axios';

class App extends Component {
  state = {
    cryptos: [],
    dataCryto: {},
    moneda: "",
    loading:false
    
  }

  async componentDidMount() {

    this.setState({
      cargando:true
    })

    await this.obtenerMonedas()
    // https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD&CMC_PRO_API_KEY=b4cdf181-91ff-4a2b-82f4-cb3f48464fb7
  }

  obtenerMonedas = async () => {
    
    const url = `https://api.coinmarketcap.com/v2/ticker/`

    await Axios.get(url)
    .then( response => {
      this.setState({
        cryptos : response.data.data
      })
    }).catch( error => {
      console.log(error)
    })
   
  }

  convertirMoneda = async (data) => {

      const {crypto,moneda} = data

      const url = `https://api.coinmarketcap.com/v2/ticker/${crypto}/?convert=${moneda}`

      await Axios.get(url)
      .then( response => { // aca voy a poner un timout para simular que la api esta tardando para poder mostrar una animacion
            
        this.setState({
          cargando:true
        })
        setTimeout(() => {
          this.setState({
            dataCryto: response.data.data,
            moneda,
            cargando:false
          })
        },3000)

      })
  }

  render() { 
    return ( 
      <div className="container">
        <Header titulo="Conversor de Crypto"/>

        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
           <Form
                cryptos = {this.state.cryptos} convertirMoneda={this.convertirMoneda}
           />

          {this.state.cargando ? (<div class="spinner"></div>
            ) : ''}

          {this.state.moneda ? (<Resultado
                                    data={this.state.dataCryto} 
                                    moneda={this.state.moneda}
                                />) : ''}
          </div>

          
        </div>

        


      </div>
    )
  }
}
 
export default App;