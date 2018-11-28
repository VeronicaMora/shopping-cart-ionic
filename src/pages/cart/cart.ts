import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { EmailComposer } from '@ionic-native/email-composer';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    /*private emailComposer: EmailComposer*/) {
  }

  private products: any = []
  private input: string = ''

  ionViewDidLoad() {
  }

  getItems() {
    if (this.input.trim() != '') {
      return this.products.filter((item) => {
        return (item.name.toLowerCase().indexOf(this.input.toLowerCase()) > -1);
      })
    }
    return this.products
  }

  sendEmail(){
    const prompt = this.alertCtrl.create({
      title: 'Enviar pedido',
      message: "¿Esta seguro de que desea enviar el pedido?",
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Enviar',
          handler: data => {           
            let email = {
              to: 'veronicaymv48@gmail.com',
              subject: 'Pedido',
              //body: `${JSON.stringify(this.items)}`,
              isHtml: true
            };
            
            //this.emailComposer.open(email);
             
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
    console.log("Se envio el email")
  }

}
