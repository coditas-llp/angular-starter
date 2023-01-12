import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Team } from '../../interfaces/team';
import { NewTeamStatus } from '../../store/state/teams.state';

@Component({
  selector: 'add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['add-team.component.scss'],
})
export class AddTeamComponent implements OnInit, OnChanges {
  @Input() teams: Team[] = [];
  @Input() newTeamStatus: NewTeamStatus;
  @Output() addTeam = new EventEmitter<Team>();
  teamForm: FormGroup;
  disableSubmit: boolean = false;
  constructor(private store: Store<{ teams: Team[] }>) {}
  ngOnInit(): void {
    this.initializForm();
  }
  ngOnChanges(): void {
    if (this.newTeamStatus === NewTeamStatus.Adding) {
      this.disableSubmit = true;
    } else if (this.newTeamStatus === NewTeamStatus.Added) {
      this.disableSubmit = false;
      this.resetForm();
    }
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
  resetForm() {
    this.teamForm.reset();
  }
}
