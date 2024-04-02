import React, { useEffect, useState } from 'react';
import { getRandomIndexes } from '../../helpers/getRandomIndexes';
import { Ability, Stat } from '../../types/layout';
import { PokemonCharacteristics } from './PokemonCharacteristics';

type Props = {
  pokemonName: string,
  pokemonImg: string,
  pokemonAbilities: Ability[],
  pokemonStats: Stat[],
};

export const PokemonInfo: React.FC<Props> = React.memo(({
  pokemonName,
  pokemonImg,
  pokemonAbilities,
  pokemonStats,
}) => {
  const [pokemonCharacteristics, setPokemonCharacteristics] = useState<Stat[]>([]);

  useEffect(() => {
    if (pokemonStats) {
      const randomIndexes = getRandomIndexes(pokemonStats.length, 4);
      const randomElements = randomIndexes.map(index => pokemonStats[index]);

      setPokemonCharacteristics(randomElements);
    }
  }, []);

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
        {pokemonCharacteristics.map(el => (
          <PokemonCharacteristics statName={el.stat.name} key={el.stat.name} />
        ))}
      </ul>
    </>
  );
});

