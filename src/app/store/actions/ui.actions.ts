import { createAction, props } from '@ngrx/store';

export const isLoading = createAction('[UI Component] isLoading');
export const stopLoading = createAction('[UI] Component] stopLoading');

export const setTitlePage = createAction('[UI Component] setTitlePage', props<{ titlePage: string}>());
export const unsetTitlePage = createAction('[UI] Component] unsetTitlePage');
