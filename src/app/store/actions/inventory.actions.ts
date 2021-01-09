import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemonDetail';
import { PokemonList } from 'src/app/shared/models/pokemonList';
import { PokemonResponse } from '../../shared/models/pokemonResponse';

export const setResponse = createAction('[Inventory] setResponse', props<{ pokemonResponse: PokemonResponse}>());
export const setList = createAction('[Inventory] setList', props<{ pokemonList: PokemonList[]}>());
export const setDetail = createAction('[Inventory] setDetail', props<{ pokemonDetail: Pokemon[]}>());

export const unSetResponse = createAction('[Inventory] unSetResponse');
export const unSetList = createAction('[Inventory] unSetList');
export const unSetDetail = createAction('[Inventory] unSetDetail');
