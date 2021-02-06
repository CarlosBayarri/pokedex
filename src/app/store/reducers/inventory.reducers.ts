import { createReducer, on } from '@ngrx/store';
import { PokemonIndex } from 'src/app/shared/models/pokemon-index';
import { Pokemon } from 'src/app/shared/models/pokemonDetail';
import * as actions from '../actions';

export interface InventoryState {
    pokemon: Pokemon;
    inventory: PokemonIndex[];
    pokemonFilter: string;
}

export const inventoryInitialState: InventoryState = {
    pokemon: null,
    inventory: null,
    pokemonFilter: null,
};

const _InventoryReducer = createReducer(inventoryInitialState,

    on(actions.setDetail, (state, {pokemon}) => ({ ...state, pokemon })),
    on(actions.setInventory, (state, {inventory}) => ({ ...state, inventory })),
    on(actions.setPokemonFilter, (state, {pokemonFilter}) => ({ ...state, pokemonFilter })),
    on(actions.unSetDetail, (state) => ({ ...state, pokemon: null})),
    on(actions.unSetInventory, (state) => ({ ...state, inventory: null})),
    on(actions.unSetPokemonFilter, (state) => ({ ...state, pokemonFilter: null})),

);

export function inventoryReducer(state, action) {
    return _InventoryReducer(state, action);
}
