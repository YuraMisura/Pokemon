import {
  Ability,
  Form,
  GameIndex,
  Item,
  Move,
  Species,
  Sprite,
  Cries,
  Stat,
  Type,
  PastType,
} from "./layout";

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndex[];
  held_items: Item[];
  location_area_encounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprite;
  cries: Cries;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
};