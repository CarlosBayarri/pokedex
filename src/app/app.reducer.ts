import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './store/reducers';

/**
 * Main state of the application
 */
export interface AppState {
   ui: reducers.UiState,
   inventory: reducers.InventoryState
   regions: reducers.RegionState
}

/**
 * Mapping all reducers
 */
export const appReducers: ActionReducerMap<AppState> = {
   ui: reducers.uiReducer,
   inventory: reducers.inventoryReducer,
   regions: reducers.regionReducer
}