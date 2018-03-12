import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

export interface FruitItemServer {
  name: string,
  image: string,
  description: string,
  link: string
}

@Injectable()

export class FruitItemsServiceServer {

  private readonly fruitsEndpoint: string;

  constructor(private http: HttpClient) {

    this.fruitsEndpoint = 'http://localhost:3000/fruits';
  }

  getFruitsFromServer(): Observable<FruitItemServer[]> {
    
    return <Observable<FruitItemServer[]>>
      this.http.get(this.fruitsEndpoint);
  }
}

