import { createReducer, on } from '@ngrx/store';
import * as TeamsActions from '../actions/teams.actions';
import { Team } from '../../interfaces/team';

const initialTeamsState: Team[] = [];

export const teamsFeatureKey = 'teams';

export const teamsReducer = createReducer(
  initialTeamsState,
  on(TeamsActions.loadTeamsSuccess, (state, { teams }) => teams),
  on(TeamsActions.addTeam, (state, { team }) => {
    return state;
  })
);
