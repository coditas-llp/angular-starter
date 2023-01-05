import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleSmartComponent } from './container/sample-smart/sample-smart.component';
import { SampleAddFunctinalityComponent } from './components/sample-add-functinality/sample-add-functinality.component';
import { SampleRemoveFunctinalityComponent } from './components/sample-remove-functinality/sample-remove-functinality.component';


@NgModule({
  declarations: [
    SampleSmartComponent,
    SampleAddFunctinalityComponent,
    SampleRemoveFunctinalityComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
