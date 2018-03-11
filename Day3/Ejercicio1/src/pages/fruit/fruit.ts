import { Component, OnInit } from '@angular/core';
import { NavParams } from "ionic-angular";
import { FruitItem } from "../../services/fruitItems";

@Component({
  selector: 'page-details',
  templateUrl: 'fruit.html'
})

export class FruitsPage implements OnInit {

  private fruit: FruitItem;

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {

    this.fruit = this.navParams.get('fruit');

  }
}

