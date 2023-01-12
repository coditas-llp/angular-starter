import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTeams } from '../../store/actions/teams.actions';
import { TeamsState } from '../../store/state/teams.state';

@Component({ selector: 'teams', templateUrl: './teams.component.html' })
export class TeamsComponent {
  constructor(private store: Store<{ teamsState: TeamsState }>) {
    this.store.dispatch(loadTeams());
  }
}
