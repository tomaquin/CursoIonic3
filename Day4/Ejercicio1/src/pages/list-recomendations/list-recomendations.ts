import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecomendationItem, RecomendationItemsService } from "../../services/recomendationItems";
import { RecomendationsPage } from "../recomendation/recomendation";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'page-list',
    templateUrl: 'list-recomendations.html'
})

export class ListRecomendationsPage implements OnInit, OnDestroy {

  private recomendations: RecomendationItem[];

  private isRecomendationLoading: boolean;

  private subscription: Subscription;

  constructor(public navCtrl: NavController,
              private recomendationItemsService: RecomendationItemsService) {

      this.recomendationItemsService = recomendationItemsService;
  }

  ngOnInit() {

      this.isRecomendationLoading = true;

      this.subscription = this.recomendationItemsService.getRecomendationItems()
        .subscribe((recomendations: RecomendationItem[]) => {
          this.recomendations = recomendations;
          this.isRecomendationLoading = false;
        });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  itemTapped(event, item) {
      this.navCtrl.push(RecomendationsPage, {
        recomendation: item
      });
  }
}
