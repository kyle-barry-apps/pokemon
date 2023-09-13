import { useState } from "react";
import "./pokemonItem.css";

const PokemonItem = ({ pokemon }) => {
  const [pokeData, setPokeData] = useState();

  const handleClick = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        console.log(data);

        setPokeData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  return (
    <div className="pokemon-container" onClick={handleClick}>
      <h1>{pokemon.name}</h1>
    </div>
  );
};

export default PokemonItem;
