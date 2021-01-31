import { Ability } from './ability';
import { GameIndex } from './gameIndex';
import { HeldItem } from './heldItem';
import { Move } from './move';
import { Species } from './species';
import { Sprites } from './sprites';
import { Stat } from './stat';
import { Type } from './type';

export interface Pokemon {
  abilities: Ability[]; // A list of abilities this Pokémon could potentially have.
  base_experience: number; // The base experience gained for defeating this Pokémon.
  forms: Species[]; // A list of forms this Pokémon can take on.
  game_indices: GameIndex[]; // A list of game indices relevent to Pokémon item by generation.
  height: number; // The height of this Pokémon in decimetres.
  held_items: HeldItem[]; // A list of items this Pokémon may be holding when encountered.
  id: number; // The identifier for this resource.
  is_default: boolean; // Set for exactly one Pokémon used as the default for each species.
  location_area_encounters: string; // A link to a list of location areas, as well as encounter details pertaining to specific versions.
  moves: Move[]; // A list of moves along with learn methods and level details pertaining to specific version groups.
  name: string; // The name for this resource.
  order: number; // Order for sorting. Almost national order, except families are grouped together.
  species: Species; // The species this Pokémon belongs to.
  sprites: Sprites; // A set of sprites used to depict this Pokémon in the game.
  // A visual representation of the various sprites can be found at PokeAPI/sprites
  stats: Stat[]; // A list of base stat values for this Pokémon.
  types: Type[]; // A list of details showing types this Pokémon has.
  weight: number; // The weight of this Pokémon in hectograms.
}
