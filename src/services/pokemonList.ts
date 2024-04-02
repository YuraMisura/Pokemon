import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon } from '../types/Pokemon';
import { PokemonCharacteristic } from '../types/PokemonCharacteristic';
import { PokemonList } from '../types/PokemonList';

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
    getPokemonCharacteristics: builder.query<PokemonCharacteristic, number>({
      query: (pokemonId) => `characteristic/${pokemonId}`,
    }),
    getCharacteristicTranslet: builder.query({
      query: (pokemonId) => `language/${pokemonId}`,
    }),
  }),
})

export const { 
  useGetPokemonListQuery, 
  useGetPokemonByNameQuery,
  useGetPokemonCharacteristicsQuery,
  useGetCharacteristicTransletQuery,
 } = pokemonApi;