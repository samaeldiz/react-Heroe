
import React from 'react' // irm
import Heroe from '../Heroe';
import './index.css'

// componente de clases recibe props 

/*
class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <h2>Bienvenidos</h2>
            </div>
        )
    }
}
export default Container;
*/

// ccc = mas corto.
class Container extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    state = {  }
    render() { 
        return ( 
            <div className="container">
            <h2>Bienvenidos</h2>
            {
                this.props.heroes.map( (heroe) => <Heroe  key = {heroe.id} name={heroe.name} origen ={heroe.origen} />)
            }

        </div>
         );
    }
}
 
export default Container;


