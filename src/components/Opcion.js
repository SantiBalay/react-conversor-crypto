import React, { Component } from 'react';

class Opcion extends Component {
    render() { 

        const {id,name} = this.props.crypto
        return (
            <option value={id}>
                {name}
            </option>
          );
    }
}
 
export default Opcion;