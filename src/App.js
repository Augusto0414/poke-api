import './App.css';
import { useState, useEffect } from 'react';
import Character from './components/Character';

function App() {  
  const [character, setCharacter] = useState({});

  const generatePokeId = () => {
    let min = Math.ceil(1);
    let max = Math.floor(898);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
  
  async function pokeApi (){
    const pokeId = generatePokeId();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    const data = await response.json();
    setCharacter(data);
  }

  useEffect(() => {
    pokeApi();
  }, []); 
 
  return (
    <div className="App">
     {
        <Character 
        id = {character.id}
        name = {character.name}
        />
     }
    </div>
  )
}

export default App;
 