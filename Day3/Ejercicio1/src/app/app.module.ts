import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FruitItemsService } from "../services/fruitItems";
import { RecomendationItemsService } from "../services/recomendationItems";
import { FruitsPage } from "../pages/fruit/fruit";
import { RecomendationsPage } from "../pages/recomendation/recomendation";
import { VotingComponent } from "../components/voting/voting";
import { LimitTextPipe } from "../pipes/limitText";
import { ListFruitsPage } from "../pages/list-fruits/list-fruits";
import { ListRecomendationsPage } from "../pages/list-recomendations/list-recomendations";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FruitsPage,
    RecomendationsPage,
    ListFruitsPage,
    ListRecomendationsPage,
    VotingComponent,
    LimitTextPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FruitsPage,
    RecomendationsPage,
    ListFruitsPage,
    ListRecomendationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FruitItemsService,
    RecomendationItemsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
