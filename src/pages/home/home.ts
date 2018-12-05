import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { CommentsProvider } from '../../providers/comments/comments';
import { CartProvider } from '../../providers/cart/cart';
import { LoginPage } from '../login/login';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
    private productsProvider: ProductsProvider,
    private commentsProvider: CommentsProvider,
    private cartProvider: CartProvider,
    public alertCtrl: AlertController) {
      
      this.ionViewDidEnter();
  }

  private products: any = []
  private input: string = ''
  private comment_text: string = ''
  private created_at: string = ''
  private id_product: number
  private id_user: number
  private cart: any = []
  private comments: any = []

  ionViewDidEnter() {
    this.productsProvider.getProducts().subscribe((data: any) => {
      console.log(data)
      this.products = data
    }, (error) => {
      console.log(error)
    })

    this.commentsProvider.getComments().subscribe((data: any) => {
      console.log(data)
      this.comments = data
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

  getComments(){
    return this.comments
  }

  createComment(){
    this.commentsProvider.createComment(this.comment_text, this.created_at, this.id_product, this.id_user).subscribe((data) => {
      console.log(data)
    }, (error) => {
      console.log(error)
    })
  }

  addToCart(){
    /*console.log("se añadio al carrito")
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
            const cantidad = Number(data.cantidad)*/
                this.cartProvider.addCartProduct(this.id_product).subscribe((data: number) => {
                  console.log(data)
                  this.cart = data
                }, (error) => {
                  console.log(error)
                })
            /*}
          }
      ]
    });
    prompt.present();*/
  }

  goToProduct(){
    this.navCtrl.push(ProductPage)
  }

  
}