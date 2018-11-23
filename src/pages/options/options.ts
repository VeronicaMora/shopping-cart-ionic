import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UpdatePage } from '../update/update';
import { PetitionsProvider } from '../../providers/petitions/petitions'


@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    private petitions: PetitionsProvider,
    public appCtrl: App) {
  }

  ionViewDidLoad() {
  }

  updateProfile(){
    console.log('editando la cuenta')
    this.navCtrl.push(UpdatePage)
  }

  logout(){
    const confirm = this.alertCtrl.create({
      title: 'Cerrar sesión',
      message: '¿Estas seguro de cerrar sesión?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('no pinche loca');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('se cerro sesión')
            localStorage.removeItem('token')
            this.appCtrl.getRootNav().setRoot(LoginPage)
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

  deleteAccount() {
    const confirm = this.alertCtrl.create({
      title: 'Eliminar cuenta',
      message: '¿Estas seguro de eliminar tu cuenta?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('se elimino la cuenta')
            this.petitions.removeAccount().subscribe((data) => {
              console.log(data)
              this.navCtrl.setRoot(LoginPage);
            }, (error) => {
              console.log(error)
            })
          }
        }
      ]
    });
    confirm.present();
  }
}
