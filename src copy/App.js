
import './App.css';
import ContainerF from './components/ContainerF';

function App() {

const heroes = [

  {id:1, name:"Spaiderman", origen: "Marvel"},
  {id:1, name:"Superman", origen: "DC"},
  {id:1, name:"Batman", origen: "CD"},
  {id:1, name:"Hulk", origen: "Marvel"},
  {id:1, name:"Lobo", origen: "DC"},

]

  return (
      <>
      <ContainerF heroes={heroes}/>
      </>
  );
}

export default App;
