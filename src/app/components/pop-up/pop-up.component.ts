import { Component, Input, Output, EventEmitter } from '@angular/core';
import { surfspot } from 'src/app/interfaces/surfspot';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
@Input() popUpSpot!: surfspot
@Output() onClosePopUp: EventEmitter<boolean> = new EventEmitter()

closePopUp(){
this.onClosePopUp.emit()
}

}
