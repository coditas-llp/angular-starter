import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DumbSampleComponent } from './shared/components/dumb-sample/dumb-sample.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, DumbSampleComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(reducers, { metaReducers })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
