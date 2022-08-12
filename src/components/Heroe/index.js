import React from 'react' // imr
import './index.css'
// import React, { Component } from 'react' // imrc


class Heroe extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <>
            <h4>{this.props.name}</h4>
            <small>{this.props.origen}</small>
            </> 

         );
    }
}
 
export default Heroe;