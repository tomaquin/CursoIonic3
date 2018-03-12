import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { ModalSitioPage } from "../modal-sitio/modal-sitio";

declare var google: any;

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  mapa: any; // Manejador del mapa.
  coords : any = { lat: 0, lng: 0 };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              private geolocation: Geolocation,
              public modalCtrl : ModalController) {

    platform.ready().then(() => {
      // la plataforma esta lista y ya tenemos acceso a los plugins.
      this.obtenerPosicion();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  loadMap(){
    let mapContainer = document.getElementById('mapa');
    this.mapa = new google.maps.Map(mapContainer, {
      center: this.coords,
      zoom: 12
    });

    // colocamos el marcador
    let miMarker = new google.maps.Marker({
      icon : 'assets/imgs/map-marker.png',
      map: this.mapa,
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
    // aquí vamos a abrir el modal para añadir nuestro sitio.
    let mimodal = this.modalCtrl.create( 'ModalSitioPage',this.coords );
    mimodal.present();
  }

}
