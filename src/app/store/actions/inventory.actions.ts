import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemonDetail';
import { PokemonIndex } from '../../shared/models/pokemon-index';

export const setInventory = createAction('[Inventory] setInventory', props<{ inventory: PokemonIndex[]}>());
export const setDetail = createAction('[Inventory] setDetail', props<{ pokemon: Pokemon}>());

export const unSetInventory = createAction('[Inventory] unSetInventory');
export const unSetDetail = createAction('[Inventory] unSetDetail');
