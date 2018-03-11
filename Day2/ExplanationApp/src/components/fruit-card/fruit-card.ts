import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the FruitCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fruit-card',
  templateUrl: 'fruit-card.html'
})
export class FruitCardComponent {

  @Input() fruit: any; // hay que poner input arriba, con Ctrl + Space lo pone automaticamente pero aqui no me deja
  @Output() delete: EventEmitter<void>; // emisor de eventos que no va a enviar nada (void)

  constructor() {
    this.delete = new EventEmitter<void>();
  }

  deletePressed() {
    this.delete.emit(); // asi lo mandamos al home
  }
}
