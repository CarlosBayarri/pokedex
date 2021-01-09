import { createReducer, on } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemonDetail';
import { PokemonList } from 'src/app/shared/models/pokemonList';
import * as actions from '../actions';

export interface InventoryState {
    inventory: PokemonList[],
    pokemon: Pokemon
}

export const inventoryInitialState: InventoryState = {
    inventory  : [],
    pokemon  : null
}

const _InventoryReducer = createReducer(inventoryInitialState,

    on(actions.setList, (state, {pokemonList}) => ({ ...state, pokemonList: [...pokemonList] })),
    on(actions.setDetail, (state, {pokemonDetail}) => ({ ...state, pokemonDetail: pokemonDetail })),
    on(actions.unSetList, (state) => ({ ...state, inventory: []})),
    on(actions.unSetDetail, (state) => ({ ...state, pokemon: null})),

);

export function inventoryReducer(state, action) {
    return _InventoryReducer(state, action);
}