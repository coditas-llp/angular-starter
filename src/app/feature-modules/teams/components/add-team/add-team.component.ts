import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Team } from '../../interfaces/team';

@Component({
  selector: 'add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['add-team.component.scss'],
})
export class AddTeamComponent implements OnInit {
  @Input() teams: Team[] = [];
  @Output() addTeam = new EventEmitter<Team>();
  teamForm: FormGroup;
  constructor(private store: Store<{ teams: Team[] }>) {}
  ngOnInit(): void {
    this.initializForm();
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
    this.addTeam.emit(this.teamForm.value);
  }
}
