import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PetitionsProvider } from '../../providers/petitions/petitions';
import { LoginPage } from '../login/login';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
    private petitions: PetitionsProvider,
    public alertCtrl: AlertController) {
    this.initializeItems();
  }

  private notes: any = [];
  private input: string = ''
  private items: any = []

  initializeItems() {
    /*this.petitions.getNotes().subscribe((data: any) => {
      console.log(data)
      this.notes = data
    }, (error) => {
        console.log({ error })
      })
      */
  }

  logout(){
    console.log('se cerro sesión')
    localStorage.removeItem('token')
    this.navCtrl.setRoot(LoginPage);
  }

  getItems() {
    /*if (this.input.trim() != '') {
      return this.notes.filter((item) => {
        return (item.title.toLowerCase().indexOf(this.input.toLowerCase()) > -1);
      })
    }
    return this.notes
    */
  }

  addToCart(){
    console.log("se añadio al carrito")
    const prompt = this.alertCtrl.create({
      title: 'Cantidad de productos',
      inputs: [
        {
          name:'cantidad',
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