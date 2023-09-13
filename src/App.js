import { useState, useEffect } from "react";
import PokemonItem from "./components/PokemonItem";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  console.log(nextUrl);

  const url = "https://pokeapi.co/api/v2/pokemon/";

  const handleNextPage = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(nextUrl);
        const data = await response.json();

        setData(data.results);
        setNextUrl(data.next);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setData(data.results);
        setNextUrl(data.next);
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

        {nextUrl !==
          "https://pokeapi.co/api/v2/pokemon/?offset=1280&limit=1" && (
          <div className="btn-container">
            <button className="btn" onClick={handleNextPage}>
              Next Page
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
