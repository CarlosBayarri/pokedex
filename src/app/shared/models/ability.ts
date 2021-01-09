import { Species } from "./species";

export interface Ability {
    ability:  Species;
    isHidden: boolean;
    slot:     number;
  }