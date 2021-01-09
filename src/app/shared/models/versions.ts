import { GenerationI } from "./generationI";
import { GenerationIi } from "./generationIi";
import { GenerationIii } from "./generationIii";
import { GenerationIv } from "./generationIv";
import { GenerationV } from "./generationV";
import { GenerationVi } from "./generationVi";
import { GenerationVii } from "./generationVii";
import { GenerationViii } from "./generationViii";

export interface Versions {
    generationI:    GenerationI;
    generationIi:   GenerationIi;
    generationIii:  GenerationIii;
    generationIv:   GenerationIv;
    generationV:    GenerationV;
    generationVi:   { [key: string]: GenerationVi };
    generationVii:  GenerationVii;
    generationViii: GenerationViii;
  }