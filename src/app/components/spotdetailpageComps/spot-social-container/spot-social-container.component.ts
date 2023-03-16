import { Component, Input } from '@angular/core';
import { surfspot } from 'src/app/interfaces/surfspot';

@Component({
  selector: 'app-spot-social-container',
  templateUrl: './spot-social-container.component.html',
  styleUrls: ['./spot-social-container.component.scss']
})
export class SpotSocialContainerComponent {
@Input() currentSpot!: surfspot

comments: any = this.currentSpot.comments
}
