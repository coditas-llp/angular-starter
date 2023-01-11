import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Team } from '../../interfaces/team';
import { addTeam, removeTeam } from '../../store/actions/teams.actions';

@Component({
  selector: 'teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
  teams$: Observable<Team[]> = this.store.select(state => state.teams);
  teams: Team[];
  selectedTeam: number;
  constructor(private store: Store<{ teams: Team[] }>) {}
  ngOnInit() {
    this.teams$.subscribe(teams => {
      this.teams = teams;
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
    console.log(newTeamList);
    this.store.dispatch(removeTeam({ teams: newTeamList }));
  }
}
