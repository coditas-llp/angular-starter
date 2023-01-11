import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Team } from '../../interfaces/team';
import { loadTeams } from '../../store/actions/teams.actions';

@Component({ selector: 'teams', templateUrl: './teams.component.html' })
export class TeamsComponent {
  constructor(private store: Store<{ teams: Team[] }>) {
    this.store.dispatch(loadTeams());
  }
}
