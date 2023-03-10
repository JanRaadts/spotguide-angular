import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SurfspotsService implements OnInit{

  private apiUrl = 'http://spotguide.vercel.app/api'

  constructor(private http:HttpClient) { }

  getTask(){
    return this.http.get(this.apiUrl)
   }

   ngOnInit(): void {
     this.getTask()
   }
}
