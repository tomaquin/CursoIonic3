import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { ListadoPage } from '../listado/listado';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListadoPage;
  tab3Root = InfoPage;

  constructor() {

  }
}
