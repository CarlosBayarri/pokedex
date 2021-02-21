import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

export interface UiState {
    isLoading: boolean;
    titlePage: string;
    showSidebar: boolean;
}

export const uiInitialState: UiState = {
    isLoading: false,
    titlePage: 'Pokedex',
    showSidebar: false
};

const _uiReducer = createReducer(uiInitialState,

    on(actions.isLoading, state => ({ ...state, isLoading: true})),
    on(actions.stopLoading, state => ({ ...state, isLoading: false})),
    on(actions.changeSidebar, state => ({ ...state, showSidebar: !state.showSidebar})),
    on(actions.showSidebar, state => ({ ...state, showSidebar: true})),
    on(actions.hideSidebar, state => ({ ...state, showSidebar: false})),
    on(actions.setTitlePage, (state, {titlePage}) => ({ ...state, titlePage})),
    on(actions.unsetTitlePage, state => ({ ...state, titlePage: null}))

);

export function uiReducer(state, action) {
    return _uiReducer(state, action);
}