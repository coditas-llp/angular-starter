import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamsContainerComponent } from './container/teams-container/teams-container.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsContainerComponent,
    children: [
      {
        path: '',
        component: TeamsListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
