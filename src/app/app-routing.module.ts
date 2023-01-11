import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'teams' },
  {
    path: 'users',
    loadChildren: () =>
      import('./feature-modules/users/users.module').then(m => m.SampleModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./feature-modules/teams/teams.module').then(m => m.TeamsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
