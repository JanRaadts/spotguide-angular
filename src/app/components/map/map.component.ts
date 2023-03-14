import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { surfspot } from 'src/app/interfaces/surfspot';
import { SurfspotsService } from 'src/app/services/surfspots.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent implements OnInit{

  map!: mapboxgl.Map;
  style = 'mapbox://styles/jarakle/clbpbe5ii000z14msirbrwos5';
  lat = 54.40;
  lng = 10.30;
  surfspots: surfspot[] =[]

  constructor(private surfspotsService: SurfspotsService){
  this.surfspotsService.getSurfspots().subscribe({
    next: data => {
        this.surfspots = data
        this.createMarker()
    }})
  }


  ngOnInit() {

    this.map = new mapboxgl.Map({
      accessToken: "pk.eyJ1IjoiamFyYWtsZSIsImEiOiJjbGJtbzlsYXkwNnY3M29yeDZhOGFsZW15In0.RFqqOxiya31Sjc70F1fmFg",
      container: 'map',
      style: this.style,
      zoom: 9,
      center: [this.lng, this.lat]
      });
  }

  createMarker(){
    this.surfspots.map((marker: any) => {
      const surfspotMarker = new mapboxgl.Marker()
      .setLngLat([marker.longitude, marker.latitude])
      .addTo(this.map);
      // add a clickEvent to the marker
      surfspotMarker.getElement().addEventListener('click', () => {
       console.log(marker)
      });
    })
  }

}
