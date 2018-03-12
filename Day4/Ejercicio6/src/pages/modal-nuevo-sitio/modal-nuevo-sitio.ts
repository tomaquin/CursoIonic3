import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DbProvider } from '../../providers/db/db';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-modal-nuevo-sitio',
  templateUrl: 'modal-nuevo-sitio.html',
})
export class ModalNuevoSitioPage {

  coords: any = { lat: 0, lng: 0 };
  address: string;
  description: string = '';
  foto: any = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private camera: Camera,
              private db: DbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNuevoSitioPage');
    this.coords.lat = this.navParams.get('lat');
    this.coords.lng = this.navParams.get('lng');

    this.getAddress(this.coords).then(results=> {
      this.address = results[0]['formatted_address'];
    }, errStatus => {
      // Aquí iría el código para manejar el error
    });
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  getAddress(coords):any {
    var geocoder = new google.maps.Geocoder();

    return new Promise(function(resolve, reject) {
      geocoder.geocode({'location': coords} , function (results, status) { // llamado asincronamente
        if (status == google.maps.GeocoderStatus.OK) {
          resolve(results);
        } else {
          reject(status);
        }
      });
    });
  }

  sacarFoto(){

    let cameraOptions : CameraOptions = {
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 800,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
      this.foto = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  guardarSitio(){
    let sitio = {
      lat: this.coords.lat,
      lng: this.coords.lng ,
      address: this.address,
      description: this.description,
      foto: this.foto
    }
    this.db.addSitio(sitio).then((res)=>{
      this.cerrarModal();
      /*  alert('se ha introducido correctamente en la bd'); */
    },(err)=>{
      /* alert('error al meter en la bd'+err) */
    })
  }
}
