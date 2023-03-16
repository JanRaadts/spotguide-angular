import { Component, Input } from '@angular/core';
import { surfspot } from 'src/app/interfaces/surfspot';

@Component({
  selector: 'app-spot-info-mobile',
  templateUrl: './spot-info-mobile.component.html',
  styleUrls: ['./spot-info-mobile.component.scss']
})
export class SpotInfoMobileComponent {

  @Input() currentSpot!: surfspot
}
