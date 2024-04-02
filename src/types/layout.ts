export type Ability = {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
};

export type Form = {
  name: string;
  url: string;
};

export type GameIndex = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

export type Item = {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }[];
};

export type Move = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    version_group: {
      name: string;
      url: string;
    };
    move_learn_method: {
      name: string;
      url: string;
    };
  }[];
};

export type Species = {
  name: string;
  url: string;
};

export type Sprite = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    'official-artwork': {
      front_default: string;
      front_shiny: string;
    };
    showdown: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
  };
  versions: {
    [key: string]: {
      [key: string]: {
        back_default: string;
        back_gray?: string;
        back_shiny?: string;
        front_default: string;
        front_gray?: string;
        front_shiny?: string;
      };
    };
  };
};

export type Cries = {
  latest: string;
  legacy: string;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PastType = {
  generation: {
    name: string;
    url: string;
  };
  types: Type[];
};

export type Description = {
  description: string;
  language: {
    name: string;
    url: string;
  };
};

export interface StatsMove {
  name: string;
  url: string;
}

export interface AffectingMove {
  change: number;
  move: StatsMove;
}

export interface AffectingMoves {
  increase: AffectingMove[];
  decrease: AffectingMove[];
}

export interface Nature {
  name: string;
  url: string;
}

export interface AffectingNature {
  name: string;
  url: string;
}

export interface AffectingNatures {
  increase: AffectingNature[];
  decrease: AffectingNature[];
}

export interface Characteristic {
  url: string;
}

export interface MoveDamageClass {
  name: string;
  url: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface Name {
  name: string;
  language: Language;
}