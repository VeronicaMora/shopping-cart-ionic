import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-my-product',
  templateUrl: 'my-product.html',
})
export class MyProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  deleteProduct(){
    console.log("eliminar")
  }

  updateProduct(){
    console.log("actualizar")
  }
}
