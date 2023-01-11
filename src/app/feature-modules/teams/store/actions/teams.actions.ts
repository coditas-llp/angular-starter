import { createAction, props } from '@ngrx/store';
import { Team } from '../../interfaces/team';

export const loadTeams = createAction('[Teams] Load Teams');
export const loadTeamsSuccess = createAction(
  '[Teams] Load Teams Success',
  props<{ teams: Team[] }>()
);
export const loadTeamsFailure = createAction(
  '[Teams] Load Teams Failure',
  props<{ error: any }>()
);

export const addTeam = createAction(
  '[Teams] Add Team',
  props<{ team: Team }>()
);
export const addTeamSuccess = createAction('[Teams] Add Team Success');
export const addTeamFailure = createAction('[Teams] Add Team Failure');

export const removeTeam = createAction(
  '[Teams] Remove Team',
  props<{ teams: Team[] }>()
);
export const removeTeamSuccess = createAction('[Teams] Remove Team Success');
export const removeTeamFailure = createAction(
  '[Teams] Remove Team Failure',
  props<{ error: any }>()
);
