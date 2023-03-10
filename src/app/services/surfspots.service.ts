import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { surfspot } from '../interfaces/surfspot';

@Injectable({
  providedIn: 'root'
})

export class SurfspotsService {

  url: string = "https://spotguide.vercel.app/api/"

 constructor(private http: HttpClient){}

 // fetch surfspots from DB

 getSurfspots(): Observable <surfspot[]>{
  return this.http.get<surfspot[]>(this.url);
 }

}
