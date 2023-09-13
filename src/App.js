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
    <div className="container">
      {data.length > 0 &&
        data.map((pokemon) => {
          return <PokemonItem key={pokemon.name} pokemon={pokemon} />;
        })}
    </div>
  );
}

export default App;
