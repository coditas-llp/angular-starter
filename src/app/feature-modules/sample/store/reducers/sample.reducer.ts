import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from '../state/sample.state'

export const sampleFeatureKey = 'sample';

export const reducer = createReducer(
  initialState,

);
