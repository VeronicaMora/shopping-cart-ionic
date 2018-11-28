import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
=======
import { NavController, AlertController } from 'ionic-angular';
import { PetitionsProvider } from '../../providers/petitions/petitions';
>>>>>>> 7304799ce957ec2cd40b44f57126db088938c7ff
import { LoginPage } from '../login/login';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
    private productsProvider: ProductsProvider,
    public alertCtrl: AlertController) {
      
      this.ionViewDidEnter();
  }

  private products: any = []
  private input: string = ''

  ionViewDidEnter() {
    this.productsProvider.getProducts().subscribe((data: any) => {
      console.log(data)
      this.products = data
    }, (error) => {
      console.log(error)
    })
  }

  logout(){
    console.log('se cerro sesión')
    localStorage.removeItem('token')
    this.navCtrl.setRoot(LoginPage);
  }

  getItems() {
    if (this.input.trim() != '') {
      return this.products.filter((item) => {
        return (item.name.toLowerCase().indexOf(this.input.toLowerCase()) > -1);
      })
    }
    return this.products
  }

  addToCart(){
    console.log("se añadio al carrito")
    const prompt = this.alertCtrl.create({
      title: 'Cantidad de productos',
      inputs: [
        {
          name:'Cantidad',
          placeholder:'Cantidad',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Aceptar',
          handler: data => {
            const cantidad = Number(data.cantidad)
            if(cantidad && cantidad > 0){
                //this.carrito.setItem({...item, cantidad: data.cantidad});
                console.log("cantidad")
            }
          }
        }
      ]
    });
    prompt.present();
  }

  goToProduct(){
    this.navCtrl.push(ProductPage)
  }

  
}