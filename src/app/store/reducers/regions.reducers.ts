import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { PokemonResponse } from '../../shared/models/pokemonResponse';

export interface RegionState {
    region: any,
    responseRegions: PokemonResponse
}

export const regionInitialState: RegionState = {
    region: null,
    responseRegions: null
}

const _RegionReducer = createReducer(regionInitialState,

    on(actions.setRegion, (state, {region}) => ({ ...state, region: region })),
    on(actions.setResponseRegions, (state, {responseRegions}) => ({ ...state, responseRegions: responseRegions })),
    on(actions.unSetRegion, (state) => ({ ...state, region: null})),
    on(actions.unSetResponseRegions, (state) => ({ ...state, responseRegions: null})),

);

export function regionReducer(state, action) {
    return _RegionReducer(state, action);
}