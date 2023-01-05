import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdtsButtonComponent} from './components/cdts-button/cdts-button.component';
import { CdtsGridComponent } from './components/cdts-grid/cdts-grid.component';
import { CdtsFormComponent } from './components/cdts-form/cdts-form.component'
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CdtsButtonComponent, CdtsGridComponent, CdtsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [CdtsButtonComponent, CdtsGridComponent, CdtsFormComponent]
})
export class SharedModule { }
