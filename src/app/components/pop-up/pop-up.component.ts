import { Component, Input, Output, EventEmitter } from '@angular/core';
import { surfspot } from 'src/app/interfaces/surfspot';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  animations: [
    trigger('fadeIn',[
      transition(':enter', [
        style({ opacity: 1, transform: 'translate(0, +400px)' }),
        animate('300ms', style({opacity: 1, transform: 'translate(0, +100px)'}))
      ])
    ])
  ]
})
export class PopUpComponent {
@Input() popUpSpot!: surfspot
@Output() onClosePopUp: EventEmitter<boolean> = new EventEmitter()

closePopUp(){
this.onClosePopUp.emit()
}

}
