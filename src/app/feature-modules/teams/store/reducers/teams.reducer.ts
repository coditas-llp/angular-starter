import { createReducer, on } from '@ngrx/store';
import * as TeamsActions from '../actions/teams.actions';
import { NewTeamStatus, TeamsState } from '../state/teams.state';

const initialTeamsState: TeamsState = {
  teams: [],
  teamsLoaded: false,
  teamsLoading: false,
  addNewTeam: NewTeamStatus.NotInitiated,
};

export const teamsFeatureKey = 'teamsState';

export const teamsReducer = createReducer(
  initialTeamsState,
  on(TeamsActions.loadTeams, state => {
    return { ...state, teamsLoaded: false, teamsLoading: true };
  }),
  on(TeamsActions.loadTeamsSuccess, (state, { teams }) => {
    return { ...state, teams, teamsLoaded: true, teamsLoading: false };
  }),
  on(TeamsActions.addTeam, (state, { team }) => {
    return { ...state, addNewTeam: NewTeamStatus.Adding };
  }),
  on(TeamsActions.addTeamSuccess, state => {
    return { ...state, addNewTeam: NewTeamStatus.Added };
  }),
  on(TeamsActions.addTeamFailure, state => {
    return { ...state, addNewTeam: NewTeamStatus.Failed };
  })
);
