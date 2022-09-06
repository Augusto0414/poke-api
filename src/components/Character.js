import React from 'react'
import '../style/Character.css'


const Character = ({id, name, generatePokeId,type}) => {
	const pokeId = () =>{
		generatePokeId();
	}
  return (
    < div className ='cards d-flex justify-content-center'>
				<div className ='card' style ={{width: '30rem'}} key={id}>
					<div className ='card-header'>
					   <h2 className ='card-title'>{name} </h2>
					</div>
					<div className ='card-body'>
						 <img src = {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} alt ='pokemon'/>
						    <p className ='card-text'>Type: {type}</p>
					</div>
					<div className ='card-footer'>
						 <button className ='btn btn-primary' onClick={pokeId}>Generate new pokemon</button>
					</div>	
				</div>
	</div>

  )
}

export default Character