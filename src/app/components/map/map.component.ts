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
  surfspots: surfspot[] =[
    {
      _id: "63ac4c4ca1ef2b7b89457e66",
      ID: "8PPn0zXHw0uSKEf8oyPTo",
      slug: "brasilien",
      name: "Brasilien",
      image: "https://res.cloudinary.com/dac3s5ere/image/upload/v1671110554/mysurfspot/DSCF2772_uchd0r.jpg",
      country: "deutschland",
      city: "Schönberg",
      zip: "23432",
      street: "Am Strand 3",
      coordinates: "54.41557003297096, 10.41170060728538",
      latitude: "54.4264093679071",
      longitude: "10.384499968104626",
      description: "Wer kann schon behaupten, einmal von Kalifornien nach Brasilien gesurft zu sein?  Das funktioniert nur hier, denn der Spot liegt benachbart zur Ortschaft Kalifornien.",
      winddirection: "NW",
      surfcenter: "Surfschule Brasilien",
      parking: "Kostenpflichtig",
      camping: "In der nähe vorhanden",
      comments: [],
      __v: 0
  },
  {
      _id: "63ac4fc17305e8fdfc8ce19b",
      ID: "3fOATY0Dxl-dWZCRDvDqg",
      slug: "laboe",
      name: "Laboe",
      image: "https://res.cloudinary.com/dac3s5ere/image/upload/v1671110554/mysurfspot/DSCF2772_uchd0r.jpg",
      country: "deutschland",
      city: "Laboe",
      zip: "24235",
      street: "Strandstraße 33",
      coordinates: "54.41557003297096, 10.41170060728538",
      latitude: "54.4129653",
      longitude: "10.2304048",
      description: "Laboe is nicht umsonst ein sehr beliebter Kitespot im Raum Kiel. Das Revier ist Anfängerfreundlich und eine Surfschule bei der Unterricht genommen oder Material ge-liehen werden kann ist auch vorhanden. Am Strand selbst ist reichlich Platz zum auf- und abbauen, allerdings muss man wenn man nicht direkt am Wasser aufbauen will nach dem Starten über einige Steine steigen um ins Wasser zu kommen.",
      winddirection: "N-NO oder S-SO",
      surfcenter: "Vorhanden für Verleih und Schulungen",
      parking: "Kostenpflichtig möglich",
      camping: "Nicht am Spot möglich",
      comments: []
  }
  ]

  constructor(private surfspotsService: SurfspotsService){
  // this.surfspotsService.getSurfspots().subscribe((surfspots) => this.surfspots = surfspots)
  }


  markers: any = [{lat: 12.55, lon: 55.70}, {lat: 12.65147, lon: 55.608166}, {lat: 14.55, lon: 55.70}, {lat: 12.55, lon: 50.70} ]

  ngOnInit() {

    this.map = new mapboxgl.Map({
      accessToken: "pk.eyJ1IjoiamFyYWtsZSIsImEiOiJjbGJtbzlsYXkwNnY3M29yeDZhOGFsZW15In0.RFqqOxiya31Sjc70F1fmFg",
      container: 'map',
      style: this.style,
      zoom: 9,
      center: [this.lng, this.lat]
      });

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
