import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Team } from '../interfaces/team';

@Injectable()
export class TeamsService {
  constructor(private http: HttpClient) {}
  getAllTeams() {
    return this.http.get(environment.backendBaseUrl + 'teams.json');
  }
  addTeam(team: Team) {
    const payload: { [key: number]: Team } = { [team.id]: team };
    return this.http.patch(environment.backendBaseUrl + 'teams.json', payload);
  }
  removeTeam(teams: Team[]) {
    return this.http.put(environment.backendBaseUrl + 'teams.json', teams);
  }
}
