import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as mapboxgl from 'mapbox-gl';
import { surfspot } from 'src/app/interfaces/surfspot';
import { SurfspotsService } from 'src/app/services/surfspots.service';
import { MapStatesService } from 'src/app/services/map-states.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent implements OnInit{

  subscription!: Subscription;
  map!: mapboxgl.Map;
  style = 'mapbox://styles/jarakle/clbpbe5ii000z14msirbrwos5';
  lat = 53.07;
  lng = 8.97;
  coordinates!: [number, number] 
  surfspots: surfspot[] = []
  mapLoading: boolean = true
  minLoading: boolean = false
  showPopUp: boolean = false
  popUpSpot!: surfspot 
  zoom!: number 

  constructor(private surfspotsService: SurfspotsService, private mapService: MapStatesService){
    this.subscription = this.surfspotsService.onChangeSurfspots().subscribe({
      next: data => {
          this.surfspots = data
          this.createMarker()
      }})

    this.subscription = this.mapService.onChangeCoordinates().subscribe(value => this.coordinates = value)
    this.subscription = this.mapService.onChangePopUpSpot().subscribe(value => this.popUpSpot = value)
    this.subscription = this.mapService.onChangeZoom().subscribe(value => this.zoom = value)
    this.subscription = this.mapService.onToggleShowPopUp().subscribe(value => this.showPopUp = value)

    this.mapService.becomeShowPopUp()
    this.mapService.becomeZoom()
    this.mapService.becomePopUpSpot()
    this.mapService.becomeCoordinates()
    }

  ngOnInit() {
    this.surfspotsService.becomeSurfspots()
    
    this.map = new mapboxgl.Map({
      accessToken: "pk.eyJ1IjoiamFyYWtsZSIsImEiOiJjbGJtbzlsYXkwNnY3M29yeDZhOGFsZW15In0.RFqqOxiya31Sjc70F1fmFg",
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: this.coordinates
      });
      this.map.once('idle', (e) => {
        this.mapLoading = false
          }) 

          this.surfspotsService.becomeSurfspots()   
  }

  createMarker(){
    this.surfspots.map((marker: any) => {
      const surfspotMarker = new mapboxgl.Marker()
      .setLngLat([marker.longitude, marker.latitude])
      .addTo(this.map);
      // add a clickEvent to the marker
      surfspotMarker.getElement().addEventListener('click', () => {

        this.mapService.changePopUpSpot(marker)
        this.mapService.changeCoordinates([marker.longitude, marker.latitude])
        this.mapService.toggleShowPopUp()
        this.mapService.changeZoom(12)

      //  this.showPopUp = !this.showPopUp
      //  this.popUpSpot = marker

       this.map.flyTo({
        center: [marker.longitude, marker.latitude],
        essential: true,
        zoom: 12
        });
      });
    })
  }

  closePopUp(){
    // this.showPopUp = !this.showPopUp
    this.mapService.toggleShowPopUp()

  }

  flyToLocation(coordinates:any){
this.map.flyTo({
  center: coordinates,
  essential: true,
  zoom: 12
  })
  }

}
