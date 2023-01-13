import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Team } from '../../interfaces/team';
import {
  addTeam,
  loadTeams,
  removeTeam,
} from '../../store/actions/teams.actions';
import { NewTeamStatus, TeamsState } from '../../store/state/teams.state';

@Component({
  selector: 'teams',
  templateUrl: './teams-container.component.html',
  styleUrls: ['./teams-container.component.scss'],
})
export class TeamsContainerComponent {
  constructor(private store: Store<{ teamsState: TeamsState }>) {
    this.store.dispatch(loadTeams());
  }
  teamsState$: Observable<TeamsState> = this.store.select(
    state => state.teamsState
  );
  teams: Team[];
  teamsLoading: boolean = true;
  selectedTeam: number;
  newTeamStatus: NewTeamStatus;
  ngOnInit() {
    this.teamsState$.subscribe(teamsState => {
      this.teams = teamsState.teams;
      this.teamsLoading = teamsState.teamsLoading;
      this.newTeamStatus = teamsState.addNewTeam;
    });
  }
  teamClicked(team: Team) {
    if (this.selectedTeam === team.id) {
      this.selectedTeam = -1;
    } else {
      this.selectedTeam = team.id;
    }
  }
  addNewTeam(team: Team) {
    this.store.dispatch(addTeam({ team: team }));
  }
  deleteTeam(team: Team) {
    const newTeamList = this.teams.filter(t => t.id !== team.id);
    this.store.dispatch(removeTeam({ teams: newTeamList }));
  }
}
