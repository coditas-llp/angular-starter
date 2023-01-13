import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from '../../interfaces/team';

@Component({
  selector: 'teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent {
  @Input() teamsLoading: boolean = false;
  @Input() selectedTeam: number;
  @Input() teams: Team[] = [];

  @Output() teamClicked = new EventEmitter<Team>();
  @Output() deleteTeam = new EventEmitter<Team>();
  @Output() addNewTeam = new EventEmitter<Team>();

  onTeamClicked(team: Team) {
    this.teamClicked.emit(team);
  }
  onDeleteTeam(team: Team) {
    this.deleteTeam.emit(team);
  }
  onAddNewTeam(team: Team) {
    this.addNewTeam.emit(team);
  }
}
