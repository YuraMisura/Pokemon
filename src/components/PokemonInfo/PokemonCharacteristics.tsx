import { useGetPokemonCharacteristicsQuery, useGetPokemonStateQuery } from '../../services/pokemonApi';


export const PokemonCharacteristics = ({ statName }: { statName: string }) => {
  const { data: stat } = useGetPokemonStateQuery(statName);
  const { data } = useGetPokemonCharacteristicsQuery(stat?.id || 1);
  const originTranslate = data?.descriptions.find(description => description.language.name === 'en');

  return (
    <li>{originTranslate?.description}</li>
  );
}