import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemonDetail';
import { PokemonList } from 'src/app/shared/models/pokemonList';
import { PokemonResponse } from '../../shared/models/pokemonResponse';

export const setResponse = createAction('[Inventory] setResponse', props<{ response: PokemonResponse}>());
export const setDetail = createAction('[Inventory] setDetail', props<{ pokemon: Pokemon}>());

export const unSetResponse = createAction('[Inventory] unSetResponse');
export const unSetDetail = createAction('[Inventory] unSetDetail');
