import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Team } from '../../interfaces/team';
import { addTeam } from '../../store/actions/teams.actions';

@Component({
  selector: 'add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['add-team.component.scss'],
})
export class AddTeamComponent implements OnInit {
  teamForm: FormGroup;
  teams: Team[];
  teams$: Observable<Team[]> = this.store.select(state => state.teams);
  constructor(private store: Store<{ teams: Team[] }>) {}
  ngOnInit(): void {
    this.initializForm();
    this.teams$.subscribe(teamsData => {
      this.teams = teamsData;
    });
  }
  initializForm() {
    this.teamForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      users: new FormControl(''),
    });
  }
  onSubmit() {
    const users = this.teamForm.get('users')?.value.split(',');
    this.teamForm.patchValue({ id: this.teams.length });
    this.teamForm.patchValue({ users: users });
    this.store.dispatch(addTeam({ team: this.teamForm.value }));
  }
}
