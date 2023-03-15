import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { SpotDetailPageComponent } from './components/spot-detail-page/spot-detail-page.component';

const routes: Routes = [
  { path: '', component: MapComponent },
  { path: ':slug', component: SpotDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
