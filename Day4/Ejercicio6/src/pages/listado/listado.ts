import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';

@Component({
  selector: 'page-list',
  templateUrl: 'listado.html'
})
export class ListadoPage {

  sitios: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public db : DbProvider) {

  }

  ionViewDidEnter(){
    this.db.getSitios().then((res)=>{
      this.sitios = [];
      for(var i = 0; i < res.rows.length; i++){
        this.sitios.push({
          id: res.rows.item(i).id,
          lat: res.rows.item(i).lat,
          lng: res.rows.item(i).lng,
          address: res.rows.item(i).address,
          description: res.rows.item(i).description,
          foto: res.rows.item(i).foto
        });
      }

    },(err)=>{ /* alert('error al sacar de la bd'+err) */ })
  }

}
