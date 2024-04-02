import React, { useEffect, useState } from 'react';
import {
  useGetPokemonCharacteristicsQuery,
} from "../../services/pokemonList";
import { getRandomIndexes } from '../../helpers/getRandomIndexes';
import { Ability } from '../../types/Pokemon';
import { Description } from '../../types/PokemonCharacteristic';

type Props = {
  pokemonId: number,
  pokemonName: string,
  pokemonImg: string,
  pokemonAbilities: Ability[],
};

export const PokemonInfo: React.FC<Props> = React.memo(({
  pokemonId,
  pokemonName,
  pokemonImg,
  pokemonAbilities,
}) => {
  const { data: characteristics } = useGetPokemonCharacteristicsQuery(pokemonId);
  const [pokemonCharacters, setPokemonCharacters] = useState<Description[]>([]);

  useEffect(() => {
    if (characteristics) {
      const randomIndexes = getRandomIndexes(characteristics.descriptions.length, 4);
      const randomElements = randomIndexes.map(index => characteristics.descriptions[index]);

      setPokemonCharacters(randomElements);
    }
  }, [characteristics]);

  return (
    <>
      <div className="pokemonCard__img-container">
        <img
          src={pokemonImg}
          alt={pokemonName}
          className="pokemonCard__img"
        />
      </div>
      <p className="pokemonCard__descriptions-text">
        Name:
        <span className="pokemonCard__name">
          {` ${pokemonName}`}
        </span>
      </p>

      <ul>
        <span className="pokemonCard__descriptions-text">Abilities:</span>
        {pokemonAbilities.map(el => (
          <li key={el.ability.name}>{el.ability.name}</li>
        ))}
      </ul>

      <ul>
        <span className="pokemonCard__descriptions-text">Characteristics:</span>
        {pokemonCharacters.map(el => (
          <li key={el.description}>
            {el.description}
          </li>
        ))}
      </ul>
    </>
  );
});