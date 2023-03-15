import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, Subject} from 'rxjs'
import { surfspot } from '../interfaces/surfspot';


@Injectable({
  providedIn: 'root'
})

export class SurfspotsService {

  url: string = "https://spotguide-server.vercel.app/api/surfspots"
  surfspots: surfspot[] = []
  private surfspotSubject = new Subject<any>();

 constructor(private http: HttpClient){}

 // fetch surfspots from DB
 getSurfspots(): Observable <surfspot[]>{
  return this.http.get<surfspot[]>(this.url);
 }

 changeSurfspots(data:any):void{
  this.surfspots = data;
  this.surfspotSubject.next(this.surfspots);
  }
    
  becomeSurfspots(){
    this.surfspotSubject.next(this.surfspots);
  }

    onChangeSurfspots():Observable<any>{
      return this.surfspotSubject.asObservable();
      }       

}
