import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { surfspot } from 'src/app/interfaces/surfspot';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { SurfspotsService } from 'src/app/services/surfspots.service';

@Component({
  selector: 'app-spot-detail-page',
  templateUrl: './spot-detail-page.component.html',
  styleUrls: ['./spot-detail-page.component.scss']
})
export class SpotDetailPageComponent implements OnInit {

  subscription!: Subscription;
  slug: any = ""
  surfspots: any
  currentSpot!: surfspot
  spotLoaded: boolean = false
  infoOrSocial: boolean = true
  mobileOrDesktop: boolean = true
  resizeObservable$!: Observable<Event>
  resizeSubscription$!: Subscription

ngOnInit() {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      if (window.innerWidth >= 700) {
        this.mobileOrDesktop = false;
      } else this.mobileOrDesktop = true;
    })
}

  constructor(private route: ActivatedRoute, private surfspotsService: SurfspotsService){
     this.subscription = this.surfspotsService.onChangeSurfspots().subscribe({
      next: data => {
        this.slug = this.route.snapshot.paramMap.get('slug')
          this.surfspots = data
          this.currentSpot = this.surfspots.find((spot: any) => spot.slug === this.slug);
          this.spotLoaded = true
      }})
      this.surfspotsService.becomeSurfspots()
  }



}
