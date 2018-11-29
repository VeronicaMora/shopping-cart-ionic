import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ProductsProvider } from '../../providers/products/products';


@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  constructor(private navCtrl: NavController, private productsProvider: ProductsProvider, private toastCtrl: ToastController) {
  }

  private name: string = ""
  private des_product: string = ""
  private price: string = ""
  private available: string = ""
  private image: string = ""

  createProduct(){
    if(this.name != '' && this.des_product != '' && this.price != '' && this.available != '' && this.image != ''){
      this.productsProvider.createProduct(this.name, this.des_product, this.price, this.available, this.image).subscribe((data) => {
        console.log(data)
      }, (error) => {
        console.log(error)
      })
      this.navCtrl.setRoot(ProfilePage)
    }
    else{
      this.presentToast('Aun no escribes');
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
