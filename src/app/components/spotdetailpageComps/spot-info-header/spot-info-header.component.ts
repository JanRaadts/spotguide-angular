import { Component, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-spot-info-header',
  templateUrl: './spot-info-header.component.html',
  styleUrls: ['./spot-info-header.component.scss']
})
export class SpotInfoHeaderComponent {

  infoOrSocial: boolean = true

  @Output() emitInfoOrSocial: EventEmitter<any> = new EventEmitter()

  constructor(private location: Location){}

  back(){
    this.location.back()
  }

  getInfo(){
this.infoOrSocial = true
this.emitInfoOrSocial.emit(this.infoOrSocial)
  }

  getSocial(){
    this.infoOrSocial = false
    this.emitInfoOrSocial.emit(this.infoOrSocial)
  }
}
