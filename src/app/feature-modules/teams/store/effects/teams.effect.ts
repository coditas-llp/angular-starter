import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Team } from '../../interfaces/team';
import { TeamsService } from '../../services/teams.service';
import * as TeamsActions from '../actions/teams.actions';

@Injectable()
export class TeamsEffects {
  loadTeams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        '[Teams] Load Teams',
        '[Teams] Add Team Success',
        '[Teams] Remove Team Success'
      ),
      mergeMap(() =>
        this.teamsService.getAllTeams().pipe(
          map(teamsResponse =>
            TeamsActions.loadTeamsSuccess({ teams: teamsResponse as Team[] })
          ),
          catchError(error =>
            of({
              type: '[Teams] Load Teams Failure',
              payload: error,
            })
          )
        )
      )
    )
  );
  addTeam$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Teams] Add Team'),
      mergeMap(action =>
        this.teamsService.addTeam((action as any).team).pipe(
          map(() => {
            return TeamsActions.addTeamSuccess();
          })
        )
      )
    )
  );
  removeTeam$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Teams] Remove Team'),
      mergeMap(action =>
        this.teamsService.removeTeam((action as any).teams).pipe(
          map(() => {
            return TeamsActions.removeTeamSuccess();
          })
        )
      )
    )
  );
  constructor(private actions$: Actions, private teamsService: TeamsService) {}
}
