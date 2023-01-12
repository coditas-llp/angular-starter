import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Team } from '../../interfaces/team';
import { addTeam, removeTeam } from '../../store/actions/teams.actions';
import { NewTeamStatus, TeamsState } from '../../store/state/teams.state';

@Component({
  selector: 'teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
  teamsState$: Observable<TeamsState> = this.store.select(
    state => state.teamsState
  );
  teams: Team[];
  teamsLoading: boolean = true;
  selectedTeam: number;
  newTeamStatus: NewTeamStatus;
  constructor(private store: Store<{ teamsState: TeamsState }>) {}
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
