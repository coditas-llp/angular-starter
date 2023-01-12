import { Team } from '../../interfaces/team';

export interface TeamsState {
  teams: Team[];
  teamsLoading: boolean;
  teamsLoaded: boolean;
  addNewTeam: NewTeamStatus;
}

export enum NewTeamStatus {
  NotInitiated,
  Adding,
  Added,
  Failed,
}
