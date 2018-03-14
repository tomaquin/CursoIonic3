import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Fruit, FruitsService } from '../../services/fruits';
import { Subscription } from 'rxjs/Subscription';
import { FruitsPage } from "../item/item";

enum PageState {
  Loading,
  Ready,
  LoadingError
}

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit, OnDestroy {

  private PageState = PageState;
  private pageState: PageState;

  private fruits: [Fruit];

  private subscription: Subscription;

  constructor(private navCtrl: NavController,
              private fruitsService: FruitsService) {

  }

  ngOnInit() {

    this.loadFruitsList();
  }

  ionViewDidEnter() {

    this.loadFruitsList();
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

  loadFruitsList() {

    this.pageState = PageState.Loading;

    this.subscription = this.fruitsService.getFruits()
      .subscribe((fruits: [Fruit]) => {

        this.fruits = fruits;
        this.pageState = PageState.Ready;

      }, () => {

        this.pageState = PageState.LoadingError;
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(FruitsPage, { fruit: item });
  }
}
