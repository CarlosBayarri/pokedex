import { PokemonList } from "./pokemonList";

export interface PokemonResponse {
    count: number;
    next: string;
    previous: string;
    results: PokemonList[];
  }