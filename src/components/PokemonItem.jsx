import { useState } from "react";
import PokemonModal from "./PokemonModal";
import "./pokemonItem.css";

const PokemonItem = ({ pokemon }) => {
  const [pokeData, setPokeData] = useState({});

  const handleClick = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();

        setPokeData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  return (
    <>
      {Object.keys(pokeData).length > 0 && (
        <PokemonModal pokeData={pokeData} setPokeData={setPokeData} />
      )}
      <div className="pokemon-container" onClick={handleClick}>
        <h1>{pokemon.name}</h1>
      </div>
    </>
  );
};

export default PokemonItem;
