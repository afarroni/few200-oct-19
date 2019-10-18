import { createAction, props } from '@ngrx/store';

export const applicationStarted = createAction(
  '[app] app_start'
);

export const applicationFeatureError = createAction(
  '[app] feature error',
  props<{ feature: string, message: string }>()
);

export const clearApplicationFeatureError = createAction(
  '[app] clearing feature error'
);

