import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../../services/pokemonApi';
import { PokemonInfo } from '../PokemonInfo';
import './PokemonCard.scss';

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
              pokemonName={pokemonDetails.name}
              pokemonImg={pokemonDetails.sprites.front_shiny || ''}
              pokemonAbilities={pokemonDetails.abilities}
              pokemonStats={pokemonDetails.stats}
            />
          </div>
        )
      )}
    </div >
  );
}