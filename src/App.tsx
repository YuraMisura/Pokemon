import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useGetPokemonListQuery } from './services/pokemonList';
import { PokemonCard } from './components/PokemonCard';
import './App.scss';

export const App: React.FC = () => {
  const [limit, setLimit] = useState(10);
  const [pokemonOrder, setPokemonOrder] = useState<string[]>([]);
  const { data: pokemonItems, error, isLoading } = useGetPokemonListQuery(30);

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

      <DragDropContext
        onDragEnd={results => handleDragDrop(results)}
      >
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : pokemonItems ? (
          <>
            <div>
              <h1>PokemonList</h1>
            </div>

            <Droppable
              droppableId="droppable-1"
              type="pokemon"
            >
              {(provided, snapshot) => (
                <div
                  className="pokemonList"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {pokemonOrder?.map((name, index) => (
                    <Draggable
                      draggableId={name}
                      key={name}
                      index={index}
                    >
                      {(provided) => (
                        <>
                          <div
                            className="pokemonList__items"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <PokemonCard pokemonName={name} />
                          </div>
                        </>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </>
        ) : null}
      </DragDropContext>
    </div>
  );
};
