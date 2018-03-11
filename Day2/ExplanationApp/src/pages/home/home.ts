import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'page-home', // nombre de la etiqueta contenedora que creamos
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy { //agregamos OnInit y lo importamos arriba en import

  //private str: string; //creamos una cadena

  private appleName: string;
  private appleImage: string;
  private appleDesc: string;
  private appleLink: string;

  private isRestoredAllowed: boolean;

  private originalFruits: any;
  private fruits: any;

  constructor() {
    /*this.str = "Hola Mundo"; //al igual que con javascript las cadenas pueden delimitarse con " o con '*/
  }

  // al importar OnInit y OnDestroy podemos implementar funciones que se ejecutaran al entrar o al destruir
  // funcionarían sin importarlos pero por buenas practicas se recomienda importar
  ngOnInit() {
    //console.log('Init!');
    this.appleName = 'Apple';
    this.appleImage = 'apple.png';
    this.appleDesc = 'The usually round red, green, or yellow fruit of a small tree of the rose family.';
    this.appleLink = 'https://www.wikipedia.org/wiki/Apple';

    this.isRestoredAllowed = false;

    this.originalFruits = [
      {
        "id": 1,
        "name": "Apple",
        "image": "apple.png",
        "description": "The usually round red, green, or yellow fruit of a small tree of the rose family.",
        "link": "https://www.wikipedia.org/wiki/Apple"
      },
      {
        "id": 2,
        "name": "Orange",
        "image": "orange.png",
        "description": "A rounded, reddish yellow, bitter or sweet citrus fruit that can be eaten.",

      },
      {
        "id": 3,
        "name": "Lemon",
        "image": "lemon.png",
        "description": "The yellowish, acid fruit of a subtropical citrus tree.",
        "link": "https://www.wikipedia.org/wiki/Lemon"
      },
      {
        "id": 4,
        "name": "Pear",
        "image": "pear.png",
        "description": "The rounded fruit of a tree of the rose family.",

      },
      {
        "id": 5,
        "name": "Strawberry",
        "image": "strawberry.png",
        "description": "The fleshy red fruit of a stemless plant belonging to the rose family.",
        "link": "https://www.wikipedia.org/wiki/Strawberry"
      },
      {
        "id": 6,
        "name": "Pineapple",
        "image": "pineapple.png",
        "description": "A tropical plant having a short stem and rigid, spiny leaves.",
        "link": "https://www.wikipedia.org/wiki/Pineapple"
      },
      {
        "id": 7,
        "name": "Watermelon",
        "image": "watermelon.png",
        "description": "A large melon with a hard, green rind and sweet, juicy, usually red pulp.",
        "link": "https://www.wikipedia.org/wiki/Watermelon"
      },
      {
        "id": 8,
        "name": "Grapes",
        "image": "grapes.png",
        "description": "The smooth-skinned, green or purple fruit that grows in clusters on vines, may be eaten, and is used to make wine.",
        "link": "https://www.wikipedia.org/wiki/Grape"
      }
    ]

    this.fruits = this.originalFruits.slice(0); //duplicamos el array original para poder restaurarlo si eliminamos elementos
  }
  //no necesitan importacion
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }
  //no necesitan importacion
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('Destroy');
  }

  deleteFruit(name: string) {

    alert('Deleting ' + name);

  }
  deleteFruitIndex(index: number) {

    this.fruits.splice(index, 1);
    this.isRestoredAllowed = true;
  }

  restoreFruits() {

    //console.log('restoreFruits');
    this.fruits = this.originalFruits.slice(0);
    this.isRestoredAllowed = false;
  }


  getGoogleLink(): string { // no recibe nada y devuelve un string
    return 'http://www.google.es';
  }





}
