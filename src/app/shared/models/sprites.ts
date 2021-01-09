import { Other } from "./other";
import { Versions } from "./versions";

export interface Sprites {
    backDefault:      string;
    backFemale:       null;
    backShiny:        string;
    backShinyFemale:  null;
    frontDefault:     string;
    frontFemale:      null;
    frontShiny:       string;
    frontShinyFemale: null;
    other?:           Other;
    versions?:        Versions;
    animated?:        Sprites;
  }