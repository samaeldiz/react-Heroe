
import React from 'react' // irm
import HeroeF from '../HeroeF';
import './index.css'


const ContainerF = ({heroes}) => {
    return ( 

        <div className="container">
        <h2>Bienvenidos</h2>
        {
            heroes.map( (heroe) => <HeroeF  key = {heroe.id} name={heroe.name} origen ={heroe.origen} />)
        }

        </div>
     );
}
export default ContainerF;

