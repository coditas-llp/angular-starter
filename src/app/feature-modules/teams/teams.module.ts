import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamsListComponent } from './container/teams-list/teams-list.component';
import { TeamsService } from './services/teams.service';
import { TeamsEffects } from './store/effects/teams.effect';
import { teamsFeatureKey, teamsReducer } from './store/reducers/teams.reducer';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './container/teams-container/teams.component';
import { UpdateTeamComponent } from './components/update-team/update-team.component';

@NgModule({
  declarations: [
    TeamsListComponent,
    TeamsComponent,
    AddTeamComponent,
    UpdateTeamComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(teamsFeatureKey, teamsReducer),
    EffectsModule.forFeature([TeamsEffects]),
  ],
  providers: [TeamsService],
})
export class TeamsModule {}
