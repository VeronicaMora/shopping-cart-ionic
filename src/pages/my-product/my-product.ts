import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products'
import { ProfilePage } from '../profile/profile'


@IonicPage()
@Component({
  selector: 'page-my-product',
  templateUrl: 'my-product.html',
})
export class MyProductPage {

  private id_product: number
  private name: string = ''
  private des_product: string = ''
  private price: number
  private available: number
  private image: string = ''

  constructor(public navCtrl: NavController, private productsProvider: ProductsProvider, private  navParams: NavParams) {
    const { id_product, name, des_product, price, available, image } = navParams.get('product');
    this.id_product = id_product
    this.name = name
    this.des_product = des_product
    this.price = price
    this.available = available
    this.image = image
    console.log(id_product)
  }

  deleteProduct(){
    this.productsProvider.removeProduct(this.id_product).subscribe((data) => {
      console.log(data)
      this.navCtrl.setRoot(ProfilePage)
    }, (error) => {
      console.log(error)
    })
  }

  updateProduct(){
    this.productsProvider.updateProduct(this.id_product, this.name, this.des_product, this.price, this.available, this.image).subscribe((data: any) => {
      console.log(data)
      this.navCtrl.setRoot(ProfilePage)
    }, (error) => {
      console.log(error)
    })
    console.log("actualizar")
  }
}
