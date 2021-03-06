import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FruitItemServer, FruitItemsServiceServer } from "../../services/fruitItems";
import { FruitsPage } from "../fruit/fruit";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'page-list',
    templateUrl: 'list-fruits.html'
})
export class ListFruitsPage implements OnInit, OnDestroy {

  private fruits: FruitItemServer[];

  private isFruitLoading: boolean;

  private subscription: Subscription;

  constructor(public navCtrl: NavController,
              private FruitItemsService: FruitItemsServiceServer) {

      this.FruitItemsService = FruitItemsService;
  }

  ngOnInit() {

      this.isFruitLoading = true;

      this.subscription = this.FruitItemsService.getFruitsFromServer()
        .subscribe((fruits: FruitItemServer[]) => {
          // BIEN
          console.log("BIEN");
          this.fruits = fruits;
          this.isFruitLoading = false;
        }, () => {
          // MAL
          console.log("ERROR");
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  itemTapped(event, item) {
    this.navCtrl.push(FruitsPage, {
      fruit: item
    });
  }
}
