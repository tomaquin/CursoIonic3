import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any;
  coords : any = { lat: 0, lng: 0 };

  constructor(public navCtrl: NavController,
              public  platform: Platform,
              private geolocation: Geolocation,
              public modalCtrl: ModalController) {

    platform.ready().then(() => {
      // La plataforma esta lista y ya tenemos acceso a los plugins.
      this.obtenerPosicion();
    });

  }

  loadMap(){
    let mapContainer = document.getElementById('map');
    this.map = new google.maps.Map(mapContainer, {
      center: this.coords,
      zoom: 12
    });

    // Colocamos el marcador
    let miMarker = new google.maps.Marker({
      icon : 'assets/imgs/map-marker.png',
      map: this.map,
      position: this.coords
    });

  }

  obtenerPosicion():any{
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;

      this.loadMap();
    })
      .catch(
        (error)=>{
          console.log(error);
        }
      );
  }

  nuevoSitio(){
    let mimodal = this.modalCtrl.create( 'ModalNuevoSitioPage',this.coords );
    mimodal.present();
  }
}
