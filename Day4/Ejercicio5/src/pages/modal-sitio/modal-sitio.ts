import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-sitio',
  templateUrl: 'modal-sitio.html',
})
export class ModalSitioPage {

  coords : any = { lat: 0, lng: 0 };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSitioPage');
    this.coords.lat = this.navParams.get('lat');
    this.coords.lng = this.navParams.get('lng');
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

}
