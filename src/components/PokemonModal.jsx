import "./pokemonModal.css";
import { useRef, useEffect } from "react";

const PokemonModal = ({ pokeData, setPokeData }) => {
  const modal_ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!modal_ref.current.contains(e.target)) {
        setPokeData({});
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [pokeData, setPokeData]);

  return (
    <div className="modal-container" ref={modal_ref}>
      <h1>{pokeData.name}</h1>
      <div className="height">Height: {pokeData.height}</div>
      <div className="weight">Weight: {pokeData.weight}</div>
      <div className="base-exp">
        Base Experience: {pokeData.base_experience}
      </div>
    </div>
  );
};

export default PokemonModal;
