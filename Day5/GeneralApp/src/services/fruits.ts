import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";

export interface Fruit {
  id: number,
  name: string
  image: string,
  description: string,
  link: string
}

@Injectable()
export class FruitsService {

  private readonly fruitsEndpoint: string;

  constructor(private http: HttpClient) {

    this.fruitsEndpoint = 'http://localhost:3000/fruits/';
  }

  // devuelve frutas en local
  getLocalFruit(): Subject<Fruit> {

    const fruitAvailable = new Subject<Fruit>();

    setTimeout(() => {

      fruitAvailable.next({
        id: 1,
        name: 'Apple',
        image: 'apple.png',
        description: 'The usually round red, green, or yellow fruit of a small tree of the rose family.',
        link: 'https://www.wikipedia.org/wiki/Apple'
      });

    }, 2000);

    return fruitAvailable;
  }

  // devuelve frutas del servidor
  getFruits(): Observable<[Fruit]> {

    return <Observable<[Fruit]>>
      this.http.get(this.fruitsEndpoint);
  }

  // guarda frutas en el servidor
  updateFruits(fruit: Fruit): Observable<[Fruit]> {

    // generamos la url donde guardar los datos
    // atención por una posible '/' entre ambas cadenas
    var url = this.fruitsEndpoint + fruit.id;

    return <Observable<[Fruit]>>
      this.http.put(url, fruit);
  }
}
