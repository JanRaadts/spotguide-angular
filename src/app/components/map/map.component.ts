import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  map!: mapboxgl.Map;
  style = 'mapbox://styles/jarakle/clbpbe5ii000z14msirbrwos5';
  lat = 55.70;
  lng = 12.55;

  ngOnInit() {

    this.map = new mapboxgl.Map({
      accessToken: "pk.eyJ1IjoiamFyYWtsZSIsImEiOiJjbGJtbzlsYXkwNnY3M29yeDZhOGFsZW15In0.RFqqOxiya31Sjc70F1fmFg",
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
      });

      // const marker1 = new mapboxgl.Marker()
      // .setLngLat([12.55, 55.70])
      // .addTo(this.map);
  }
  
}
