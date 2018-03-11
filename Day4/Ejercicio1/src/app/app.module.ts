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

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateComponent } from "../components/translate/translate,js";

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "../assets/i18n/", ".json");
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FruitsPage,
    RecomendationsPage,
    ListFruitsPage,
    ListRecomendationsPage,
    VotingComponent,
    LimitTextPipe,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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
