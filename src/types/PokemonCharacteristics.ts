export type PokemonCharacteristics = {
  id: number,
  gene_modulo: 0,
  possible_values: number[],
  highest_stat: {
    name: string,
    url: string
  },
  descriptions: [
    {
      description: string,
      language: {
        name: string,
        url: string
      }
    }
  ]
}