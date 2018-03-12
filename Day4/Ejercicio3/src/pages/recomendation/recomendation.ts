import { Component, OnInit } from '@angular/core';
import { NavParams } from "ionic-angular";
import { RecomendationItemServer } from "../../services/recomendationItems";

@Component({
  selector: 'page-details',
  templateUrl: 'recomendation.html'
})
export class RecomendationsPage implements OnInit {

  private recomendation: RecomendationItemServer;

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {

    this.recomendation = this.navParams.get('recomendation');

  }
}
