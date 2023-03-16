import { Component, Input } from '@angular/core';
import { surfspot } from 'src/app/interfaces/surfspot';

@Component({
  selector: 'app-spot-info-desktop',
  templateUrl: './spot-info-desktop.component.html',
  styleUrls: ['./spot-info-desktop.component.scss']
})
export class SpotInfoDesktopComponent {

  @Input() currentSpot!: surfspot
}
