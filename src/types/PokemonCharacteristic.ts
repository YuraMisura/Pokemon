export type Description = {
  description: string;
  language: {
    name: string;
    url: string;
  };
};

export type PokemonCharacteristic = {
  id: number,
  gene_modulo: number,
  possible_values: number[],
  highest_stat: {
    name: string,
    url: string
  },
  descriptions: Description[];
}
