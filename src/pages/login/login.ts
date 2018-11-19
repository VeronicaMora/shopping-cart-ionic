import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { PetitionsProvider } from '../../providers/petitions/petitions'
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username: string = ""
  private password: string = ""

  constructor(public navCtrl: NavController, private petitions: PetitionsProvider, private toastCtrl: ToastController) {
  }

  doLogin(){
    if(this.username != '' && this.password != ''){
      this.petitions.login(this.username, this.password).subscribe((data:any) => {
        localStorage.setItem("token", data.token);
        this.navCtrl.setRoot(HomePage); 
        this.navCtrl.setRoot(TabsPage); 
      }, (error) => {
        console.log(error)
        this.presentToast('Combinación de usuario/contraseña invalida');
      })
    }
    else{
      this.presentToast('Campos vacios');
    }
  }

  register(){
    this.navCtrl.setRoot(RegisterPage);
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
