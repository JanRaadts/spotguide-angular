import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { surfspot } from '../interfaces/surfspot';

@Injectable({
  providedIn: 'root'
})
export class MapStatesService {

  private zoomSubject = new Subject<any>();
  private coordinatesSubject = new Subject<any>();
  private showPopUpSubject = new Subject<any>();
  private popUpSpotSubject = new Subject<any>();

  showPopUp: boolean = false
  popUpSpot!: surfspot
  zoom: number = 8
  coordinates: [number, number] = [10.163150, 54.353011]
  

  constructor() {}


changeZoom(newZoom: number):void{
    this.zoom = newZoom;
    this.zoomSubject.next(this.zoom);
      }
    
      onChangeZoom():Observable<any>{
        return this.zoomSubject.asObservable();
      }

      becomeZoom(){
        this.zoomSubject.next(this.zoom);
      }


changeCoordinates(newCoordinates: [number, number]):void{
    this.coordinates = newCoordinates;
    this.coordinatesSubject.next(this.coordinates);
      }
    
      onChangeCoordinates():Observable<any>{
        return this.coordinatesSubject.asObservable();
      }

      becomeCoordinates(){
        this.coordinatesSubject.next(this.coordinates);
      }


toggleShowPopUp():void{
    this.showPopUp = !this.showPopUp;
    this.showPopUpSubject.next(this.showPopUp);
      }
    
      onToggleShowPopUp():Observable<any>{
        return this.showPopUpSubject.asObservable();
      }

      becomeShowPopUp(){
        this.showPopUpSubject.next(this.showPopUp);
      }


changePopUpSpot(newSpot: surfspot):void{
    this.popUpSpot = newSpot;
    this.popUpSpotSubject.next(this.popUpSpot);
      }
    
      onChangePopUpSpot():Observable<any>{
        return this.popUpSpotSubject.asObservable();
      }

      becomePopUpSpot(){
        this.popUpSpotSubject.next(this.popUpSpot);
      }

  
}
