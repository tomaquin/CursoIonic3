import { Component, OnInit } from '@angular/core';
import { MenuController, NavParams } from "ionic-angular";
import { FruitItemServer } from "../../services/fruitItems";

@Component({
  selector: 'page-details',
  templateUrl: 'fruit.html'
})

export class FruitsPage implements OnInit {

  private fruit: FruitItemServer;

  constructor(private navParams: NavParams,
              public menuCtrl: MenuController) {

  }

  ngOnInit() {

    this.fruit = this.navParams.get('fruit');

  }

  openRightMenu() {
    this.menuCtrl.open();
  }
}

