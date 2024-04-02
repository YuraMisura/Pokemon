import { useState } from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemonList";
import { PokemonInfo } from "./PokemonInfo";
import "./PokemonCard.scss";

export const PokemonCard = ({ pokemonName }: { pokemonName: string }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { data: pokemonDetails, error, isLoading } = useGetPokemonByNameQuery(pokemonName);

  const handlePokemonClick = () => {
    setShowInfo(!showInfo);
  }

  return (
    <div className="pokemonCard">
      <div className="pokemonCard__name">
        <button
          type="button"
          className="pokemonCard__button"
          onClick={handlePokemonClick}
        >
          <h2>{pokemonName}</h2>
        </button>
      </div>

      {showInfo && (
        error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : pokemonDetails && (
          <div className="pokemonCard__description">
            <PokemonInfo
              pokemonId={pokemonDetails.id}
              pokemonName={pokemonDetails.name}
              pokemonImg={pokemonDetails.sprites.front_shiny || ''}
              pokemonAbilities={pokemonDetails.abilities}
            />
          </div>
        )
      )}
    </div >
  );
}