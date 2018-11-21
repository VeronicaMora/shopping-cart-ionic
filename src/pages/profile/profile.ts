import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptionsPage } from '../options/options';
import { CreatePage } from '../create/create';
import { MyProductPage } from '../my-product/my-product';
import { PetitionsProvider } from '../../providers/petitions/petitions'


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(private navCtrl: NavController, private petitions: PetitionsProvider) {
  }

  private products: any = []
  private input: string = ''

  ionViewDidEnter() {
    this.petitions.getMyProducts().subscribe((data) => {
      console.log(data)
      this.products = data
    }, (error) => {
      console.log(error)
    })
  }

  goOptions(){
    this.navCtrl.push(OptionsPage);
  }

  createProduct(){
    this.navCtrl.push(CreatePage);
  }

  myProduct(){
    this.navCtrl.push(MyProductPage)
  }

}
