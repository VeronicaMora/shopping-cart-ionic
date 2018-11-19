import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptionsPage } from '../options/options';
import { CreatePage } from '../create/create';
import { MyProductPage } from '../my-product/my-product';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private input: string = ''

  ionViewDidLoad() {
  }

  goOptions(){
    this.navCtrl.setRoot(OptionsPage);
  }

  createProduct(){
    this.navCtrl.setRoot(CreatePage);
  }

  myProduct(){
    this.navCtrl.setRoot(MyProductPage)
  }

}
