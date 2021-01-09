import { Ability } from "./ability";
import { GameIndex } from "./gameIndex";
import { HeldItem } from "./heldItem";
import { Move } from "./move";
import { Species } from "./species";
import { Sprites } from "./sprites";
import { Stat } from "./stat";
import { Type } from "./type";

export interface Pokemon {
    abilities:              Ability[];
    baseExperience:         number;
    forms:                  Species[];
    gameIndices:            GameIndex[];
    height:                 number;
    heldItems:              HeldItem[];
    id:                     number;
    isDefault:              boolean;
    locationAreaEncounters: string;
    moves:                  Move[];
    name:                   string;
    order:                  number;
    species:                Species;
    sprites:                Sprites;
    stats:                  Stat[];
    types:                  Type[];
    weight:                 number;
  }