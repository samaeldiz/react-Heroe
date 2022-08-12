import React from 'react' // imr
import './index.css'
// import React, { Component } from 'react' // imrc


const HeroeF = ({name,origen}) => {

    // SE puede usar funciones
    /* 
    if (origen == "DC"){
        return(
            <h1>Hola DC</h1>
        )
    }
    */

    return ( 

        <>
        <h4>{name}</h4>
        <small>{origen}</small>
        </> 

     );
}
 
export default HeroeF;


