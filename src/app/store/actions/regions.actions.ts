import { createAction, props } from '@ngrx/store';
import { PokemonResponse } from '../../shared/models/pokemonResponse';

export const setResponseRegions = createAction('[Regions] setResponse', props<{ responseRegions: PokemonResponse}>());
export const setRegion = createAction('[Regions] setRegion', props<{ region: any}>());

export const unSetResponseRegions = createAction('[Regions] unSetResponse');
export const unSetRegion = createAction('[Regions] unSetDetail');
