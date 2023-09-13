import { useState, useEffect } from "react";
import PokemonItem from "./components/PokemonItem";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="title">Select a Pokemon</h1>
      <div className="container">
        {data.length > 0 &&
          data.map((pokemon) => {
            return <PokemonItem key={pokemon.name} pokemon={pokemon} />;
          })}
      </div>
      <div className="btn-container">
        <button></button>
      </div>
    </>
  );
}

export default App;
