import { Component } from '@angular/core';
import { NavController} from "ionic-angular";
import { ListPage } from "../list/list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  dirigeLista(event) {
    this.navCtrl.push(ListPage);
  }
}
