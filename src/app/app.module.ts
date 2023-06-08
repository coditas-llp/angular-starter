import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
//import { reducers, metaReducers } from './core/store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
