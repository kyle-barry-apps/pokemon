import "./pokemonModal.css";
import { useRef, useEffect } from "react";

const PokemonModal = ({ pokeData, setPokeData }) => {
  const modal_ref = useRef();
  console.log(pokeData);

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
      <div className="title-and-close">
        <h1>{pokeData.name}</h1>
        <div className="close-icon" onClick={() => setPokeData({})}>
          X
        </div>
      </div>
      <div className="data-container">
        <div>Order</div>
        <div>{pokeData.order}</div>
      </div>
      <div className="data-container">
        <div>Height</div>
        <div>{pokeData.height}</div>
      </div>
      <div className="data-container">
        <div>Weight</div>
        <div>{pokeData.weight}</div>
      </div>
      <div className="data-container">
        <div>Base Experience</div>
        <div>{pokeData.base_experience}</div>
      </div>
    </div>
  );
};

export default PokemonModal;
