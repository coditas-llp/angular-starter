import { createAction, props } from '@ngrx/store';

export const loadSamples = createAction(
  '[Sample] Load Samples'
);

export const loadSamplesSuccess = createAction(
  '[Sample] Load Samples Success',
  props<{ data: any }>()
);

export const loadSamplesFailure = createAction(
  '[Sample] Load Samples Failure',
  props<{ error: any }>()
);
