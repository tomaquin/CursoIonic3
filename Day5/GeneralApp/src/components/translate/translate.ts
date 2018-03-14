import { Component, Input } from '@angular/core';

@Component({
  selector: 'translate',
  templateUrl: 'translate.html'
})
export class TranslateComponent {

  @Input() params: {};
}
