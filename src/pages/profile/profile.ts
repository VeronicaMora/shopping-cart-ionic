import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptionsPage } from '../options/options';
import { CreatePage } from '../create/create';
import { MyProductPage } from '../my-product/my-product';
import { ProfileProvider } from '../../providers/profile/profile'


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(private navCtrl: NavController, private profileProvider: ProfileProvider) {
  }

  private products: any = []
  private input: string = ''
  private profile: any = []

  ionViewDidEnter() {
    this.profileProvider.getMyProducts().subscribe((data) => {
      console.log(data)
      this.products = data
    }, (error) => {
      console.log(error)
    })
    /*this.profileProvider.getProfile().subscribe((data) => {
      console.log(data)
      this.profile = data
    }, (error) => {
      console.log(error)
    })*/
  }

  getItems() {
    if (this.input.trim() != '') {
      return this.products.filter((item) => {
        return (item.name.toLowerCase().indexOf(this.input.toLowerCase()) > -1);
      })
    }
    return this.products
  }

  goOptions(){
    this.navCtrl.push(OptionsPage);
  }

  createProduct(){
    this.navCtrl.push(CreatePage);
  }

  myProduct(product){
    this.navCtrl.push(MyProductPage, { product })
  }

}
