import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map-header',
  templateUrl: './map-header.component.html',
  styleUrls: ['./map-header.component.scss']
})
export class MapHeaderComponent {

  showInputForm: boolean = false
  lat: any = 0
  lon: any = 0
  coordinates: any 
  place!: string
  
  @Output() emitCoordinates: EventEmitter<any> = new EventEmitter()

  getLocation(){
    const successCallback = (position:any) => {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude
      let coordinates = [this.lon, this.lat]
      this.emitData(coordinates)
    };
    const errorCallback = () => {
      alert('standort konnte nicht gefunden werden')
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }

  searchCity(){
    const geoUrl = `https://api.geoapify.com/v1/geocode/search?text=${this.place}&apiKey=e5002b4ebd9540a481613abeccde07c7`
    this.getGeo(geoUrl)
    this.place = ""
    this.showInputForm = false
  }

  getGeo(url:string) {
    fetch(url).then((response) => response.json())
    .then((quotesData) => {this.coordinates = quotesData; this.getLatLon()});
}

getLatLon(){
  if (this.coordinates.features.length === 0) {
    alert(`Keinen Ort mit dem Namen gefunden`);
  } else {
    this.lon = `${this.coordinates.features[0].geometry.coordinates[0]}`;
  this.lat = `${this.coordinates.features[0].geometry.coordinates[1]}`;
  let coordinates = [this.lon, this.lat]
  this.emitData(coordinates)
  }
}

emitData(data:any){
this.emitCoordinates.emit(data)
}


}
