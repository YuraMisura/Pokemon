import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import './PokemonList.scss';

type Props = {
  error: any;
  isLoading: boolean;
  pokemonItems: any;
  pokemonOrder: string[];
  handleDragDrop: (results: DropResult) => void;
}

export const PokemonList: React.FC<Props> = ({
  error,
  isLoading,
  pokemonItems,
  pokemonOrder,
  handleDragDrop
}) => {
  return (
    <div>
      <h1>PokemonList</h1>

      <DragDropContext
        onDragEnd={results => handleDragDrop(results)}
      >
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : pokemonItems ? (
          <>
            <Droppable
              droppableId="droppable-1"
              type="pokemon"
            >
              {provided => (
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
}