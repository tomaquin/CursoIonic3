import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController } from "ionic-angular";
import { Fruit, FruitsService } from "../../services/fruits";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

enum PageState {
  Loading,
  Ready,
  LoadingError,
  Saving
}

@Component({
  selector: 'page-details',
  templateUrl: 'item.html'
})

export class FruitsPage implements OnInit {

  private fruit: Fruit;

  private mostrar: boolean;

  private form: FormGroup;

  private PageState = PageState;
  private pageState: PageState;

  private getFruitSubscription: Subscription;
  private saveFruitSubscription: Subscription;

  constructor(private navParams: NavParams,
              private fruitsService: FruitsService,
              private toastCtrl: ToastController) {

  }

  ngOnInit() {

    this.fruit = this.navParams.get('fruit');

    this.mostrar = false;

    this.form = new FormGroup({
      id: new FormControl( this.fruit.id , Validators.required),
      name: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      link: new FormControl(null, Validators.required)
    });

    this.loadFruit();
  }

  loadFruit() {

    this.pageState = PageState.Loading;

    this.getFruitSubscription = this.fruitsService.getFruits()
      .subscribe((fruit: [Fruit]) => {

        this.form.patchValue(fruit);
        this.pageState = PageState.Ready;

      }, () => {

        this.pageState = PageState.LoadingError;
      });
  }


  submitForm() {

    this.pageState = PageState.Saving;

    this.saveFruitSubscription = this.fruitsService.updateFruits(this.form.value)
      .subscribe(() => {
        console.log(this.form.value);
        this.showToast('Fruit was saved successfully');
        this.pageState = PageState.Ready;

      }, () => {
        console.log(this.form.value);
        this.showToast('Error saving the fruit');
        this.pageState = PageState.Ready;
      })
  }

  showToast(message: string) {

    this.toastCtrl.create({
      message,
      duration: 3000
    }).present();
  }

  mostrarEditar(){
    this.mostrar = true;
  }

  ngOnDestroy() {

    if(this.saveFruitSubscription) {
      this.saveFruitSubscription.unsubscribe();
    }
  }
}
