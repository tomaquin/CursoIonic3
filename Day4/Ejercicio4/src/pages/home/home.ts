import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foto: any = '';

  constructor( public navCtrl: NavController,
              private camera: Camera ) {

  }

  hacerFoto(){

    let cameraOptions : CameraOptions = {
      quality: 100,
      targetWidth: 1280,
      targetHeight: 1024,
      encodingType: this.camera.EncodingType.JPEG,
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

}
