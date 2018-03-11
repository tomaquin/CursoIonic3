import { Component, Input } from '@angular/core';

/**
 * Generated class for the ExpandableContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expandable-content',
  templateUrl: 'expandable-content.html'
})
export class ExpandableContentComponent {

  @Input() fruit: any;

  private mostrarContent: boolean;

  constructor() {
    this.mostrarContent = null;
  }

  cambiarContent() {
    if (this.mostrarContent == null)
      this.mostrarContent = true;
    else
      this.mostrarContent = null;
  }

  estaMostrado() {
    return this.mostrarContent;
  }

  viewDetails(info) {
    console.log(info);
  }
}
