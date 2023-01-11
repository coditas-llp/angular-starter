import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamComponent } from './container/add-team/add-team.component';
import { TeamsListComponent } from './container/teams-list/teams-list.component';
import { TeamsComponent } from './container/teams-container/teams.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    children: [
      {
        path: '',
        component: TeamsListComponent,
      },
      {
        path: 'add-team',
        component: AddTeamComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}