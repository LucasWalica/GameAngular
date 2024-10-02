import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharSelectComponent } from './components/char-select/char-select.component';
import { MapSelectionComponent } from './components/map-selection/map-selection.component';
const routes: Routes = [
  {path: '', component: CharSelectComponent},
  {path: 'mapSelection', component: MapSelectionComponent},
  {path: '**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
