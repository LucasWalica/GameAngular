import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharSelectComponent } from './components/char-select/char-select.component';
import { MapSelectionComponent } from './components/map-selection/map-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    CharSelectComponent,
    MapSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
