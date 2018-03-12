import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export interface RecomendationItemServer {
  title: string,
  author: string,
  content: string
}

@Injectable()

export class RecomendationItemsServiceServer {

  private readonly recomendationsEndpoint: string;

  constructor(private http: HttpClient) {

    this.recomendationsEndpoint = 'http://localhost:3000/recomendations';
  }

  getRecomendationsFromServer(): Observable<RecomendationItemServer[]> {

    //invocamos un metodo de http
    return <Observable<RecomendationItemServer[]>>
      this.http.get(this.recomendationsEndpoint);
  }

}
