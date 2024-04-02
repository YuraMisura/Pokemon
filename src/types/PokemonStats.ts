import { AffectingMoves, AffectingNatures, Characteristic, MoveDamageClass, Name} from "./layout";

export interface PokemonStats {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: AffectingMoves;
  affecting_natures: AffectingNatures;
  characteristics: Characteristic[];
  move_damage_class: MoveDamageClass;
  names: Name[];
}
