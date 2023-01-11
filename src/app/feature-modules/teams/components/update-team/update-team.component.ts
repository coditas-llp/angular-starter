import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Team } from '../../interfaces/team';

@Component({
  selector: 'update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss'],
})
export class UpdateTeamComponent implements OnChanges {
  @Input() team: Team;

  @Output('teamUpdated') teamUpdated = new EventEmitter<Team>();

  teamForm: FormGroup;
  constructor() {
    this.initializForm();
  }
  ngOnChanges() {
    if (this.team) this.initializForm();
  }

  initializForm() {
    this.teamForm = new FormGroup({
      id: new FormControl(this.team ? this.team.id : ''),
      name: new FormControl(this.team ? this.team.name : ''),
      users: new FormControl(this.team ? this.team.users.join(',') : ''),
    });
  }
  onSubmit() {
    const users = this.teamForm.get('users')?.value.split(',');
    this.teamForm.patchValue({ users: users });
    this.teamUpdated.emit(this.teamForm.value);
  }
}
