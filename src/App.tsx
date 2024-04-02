import React, { useEffect, useState } from 'react';
import { useGetPokemonListQuery } from './services/pokemonApi';
import { DropResult } from 'react-beautiful-dnd';
import { PokemonList } from './components/PokemonList';
import './App.scss';

export const App: React.FC = () => {
  const [limit, setLimit] = useState(10);
  const [pokemonOrder, setPokemonOrder] = useState<string[]>([]);
  const { data: pokemonItems, error, isLoading } = useGetPokemonListQuery(limit);

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  };

  useEffect(() => {
    if (pokemonItems) {
      setPokemonOrder(pokemonItems?.results.slice(0, limit).map(pokemon => pokemon.name));
    }
  }, [pokemonItems, limit]);

  const handleDragDrop = (results: DropResult) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId && source.index === destination.index
    )
      return;

    if (type === 'pokemon') {
      const reorderPokemons = [...pokemonOrder];

      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removePokemon] = reorderPokemons.splice(sourceIndex, 1);
      reorderPokemons.splice(destinationIndex, 0, removePokemon);

      return setPokemonOrder(reorderPokemons);
    }
  };

  return (
    <div className="app">
      <div className="app__button-wrap">
        <button className="app__button" onClick={() => handleLimitChange(10)}>Show 10 Pokémon</button>
        <button className="app__button" onClick={() => handleLimitChange(30)}>Show 30 Pokémon</button>
      </div>

      <PokemonList
        error={error}
        isLoading={isLoading}
        pokemonItems={pokemonItems}
        pokemonOrder={pokemonOrder}
        handleDragDrop={handleDragDrop}
      />
    </div>
  );
};
