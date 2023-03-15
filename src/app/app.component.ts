import { Component } from '@angular/core';
import { SurfspotsService } from './services/surfspots.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private surfspotsService: SurfspotsService){
   this.surfspotsService.getSurfspots().subscribe({
    next: data => {
        this.surfspotsService.changeSurfspots(data)
    }})
  }
}
