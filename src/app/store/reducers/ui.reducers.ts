import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

export interface UiState {
    isLoading: boolean;
    titlePage: string;
}

export const uiInitialState: UiState = {
    isLoading: false,
    titlePage: 'Pokedex'
};

const _uiReducer = createReducer(uiInitialState,

    on(actions.isLoading, state => ({ ...state, isLoading: true})),
    on(actions.stopLoading, state => ({ ...state, isLoading: false})),
    on(actions.setTitlePage, (state, {titlePage}) => ({ ...state, titlePage})),
    on(actions.unsetTitlePage, state => ({ ...state, titlePage: null}))

);

export function uiReducer(state, action) {
    return _uiReducer(state, action);
}