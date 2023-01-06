import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleSmartComponent } from './container/sample-smart/sample-smart.component';
import { SampleAddFunctinalityComponent } from './components/sample-add-functinality/sample-add-functinality.component';
import { SampleRemoveFunctinalityComponent } from './components/sample-remove-functinality/sample-remove-functinality.component';
import { StoreModule } from '@ngrx/store';
import { sampleFeatureKey, reducer } from './store/reducers/sample.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SampleEffects } from './store/effects/sample.effects';

@NgModule({
  declarations: [
    SampleSmartComponent,
    SampleAddFunctinalityComponent,
    SampleRemoveFunctinalityComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    StoreModule.forFeature(sampleFeatureKey, reducer),
    EffectsModule.forFeature([SampleEffects])
  ]
})
export class SampleModule { }
