import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon } from '../types/Pokemon';
import { PokemonList } from '../types/PokemonList';
import { PokemonStats } from '../types/PokemonStats';
import { PokemonCharacteristics } from '../types/PokemonCharacteristics';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonList, number>({
      query: (limit) => `pokemon?limit=${limit}`,
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (pokemonName) => `pokemon/${pokemonName}/`,
    }),
    getPokemonState: builder.query<PokemonStats, string>({
      query: (statName) => `stat/${statName}`,
    }),
    getPokemonCharacteristics: builder.query<PokemonCharacteristics, number>({
      query: (characteristicsId) => `characteristic/${characteristicsId}`,
    }),
  }),
})

export const { 
  useGetPokemonListQuery, 
  useGetPokemonByNameQuery,
  useGetPokemonStateQuery,
  useGetPokemonCharacteristicsQuery,
 } = pokemonApi;