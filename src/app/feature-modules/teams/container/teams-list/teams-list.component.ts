import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Team } from '../../interfaces/team';
import { addTeam, removeTeam } from '../../store/actions/teams.actions';

@Component({
  selector: 'teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent {
  teams$: Observable<Team[]> = this.store.select(state => state.teams);
  selectedTeam: number;
  constructor(
    private store: Store<{ teams: Team[] }>,
    private router: Router
  ) {}

  navigateToAddTeam() {
    this.router.navigate(['/teams', 'add-team']);
  }
  teamClicked(team: Team) {
    if (this.selectedTeam === team.id) {
      this.selectedTeam = -1;
    } else {
      this.selectedTeam = team.id;
    }
  }
  updateTeam(team: Team) {
    this.store.dispatch(addTeam({ team: team }));
  }
  deleteTeam(team: Team) {
    const teamSubscription = this.teams$.subscribe(teams => {
      const newTeamList = teams.filter(t => t.id !== team.id);
      console.log(newTeamList);
      this.store.dispatch(removeTeam({ teams: newTeamList }));
    });
    teamSubscription.unsubscribe();
  }
}
