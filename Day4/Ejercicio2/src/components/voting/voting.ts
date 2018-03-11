import { Component } from '@angular/core';

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
    this.votosPositivos++;
  }
  VotoNegativo(){
    this.votosNegativos++;
  }
}
