import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { StoreModule } from '@ngrx/store';
import { usersFeatureKey, reducer } from './store/reducers/sample.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/sample.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(usersFeatureKey, reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class SampleModule {}
