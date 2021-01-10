import { createReducer, on } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemonDetail';
import { PokemonList } from 'src/app/shared/models/pokemonList';
import * as actions from '../actions';
import { PokemonResponse } from '../../shared/models/pokemonResponse';

export interface InventoryState {
    inventory: PokemonList[],
    pokemon: Pokemon,
    response: PokemonResponse
}

export const inventoryInitialState: InventoryState = {
    inventory: [],
    pokemon: null,
    response: null
}

const _InventoryReducer = createReducer(inventoryInitialState,

    on(actions.setList, (state, {list}) => ({ ...state, list: [...list] })),
    on(actions.setDetail, (state, {pokemon}) => ({ ...state, pokemon: pokemon })),
    on(actions.setResponse, (state, {response}) => ({ ...state, response: response })),
    on(actions.unSetList, (state) => ({ ...state, inventory: []})),
    on(actions.unSetDetail, (state) => ({ ...state, pokemon: null})),
    on(actions.unSetResponse, (state) => ({ ...state, response: null})),

);

export function inventoryReducer(state, action) {
    return _InventoryReducer(state, action);
}