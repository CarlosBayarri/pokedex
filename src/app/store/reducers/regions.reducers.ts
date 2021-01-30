import { createReducer, on } from '@ngrx/store';
import { PokemonResponse } from '../../shared/models/pokemonResponse';
import * as actions from '../actions';

export interface RegionState {
    region: any;
    responseRegions: PokemonResponse;
}

export const regionInitialState: RegionState = {
    region: null,
    responseRegions: null
};

const _RegionReducer = createReducer(regionInitialState,

    on(actions.setRegion, (state, {region}) => ({ ...state, region })),
    on(actions.setResponseRegions, (state, {responseRegions}) => ({ ...state, responseRegions })),
    on(actions.unSetRegion, (state) => ({ ...state, region: null})),
    on(actions.unSetResponseRegions, (state) => ({ ...state, responseRegions: null})),

);

export function regionReducer(state, action) {
    return _RegionReducer(state, action);
}
