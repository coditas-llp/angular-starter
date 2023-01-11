import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from '../state/sample.state';

export const usersFeatureKey = 'users';

export const reducer = createReducer(initialState);
