import { Component } from '@angular/core';

/**
 * Generated class for the VotingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'voting',
  templateUrl: 'voting.html'
})
export class VotingComponent {

  private votosPositivos: number;
  private votosNegativos: number;

  constructor() {
    this.votosPositivos = 0;
    this.votosNegativos = 0;
  }

  VotoPositivo(){
    this.votosPositivos += 1;
  }
  VotoNegativo(){
    this.votosNegativos += 1;
  }
}
