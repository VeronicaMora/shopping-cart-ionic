import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { PetitionsProvider } from '../../providers/petitions/petitions'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private username: string = ""
  private password: string = ""

  constructor(private navCtrl: NavController, private petitions: PetitionsProvider, private toastCtrl: ToastController) {
  }

  doSignup(){
    if(this.username != '' && this.password != ''){
      this.petitions.signup(this.username, this.password).subscribe((data: any) => {
        localStorage.setItem("token", data.token);
        this.navCtrl.push(HomePage);
      }, (error) => {
        console.log(error)
        this.presentToast('El nombre de usuario ya existe, por favor intenta con otro');
      })
    }
    else{
      this.presentToast('Campos vacios');
    }
    this.navCtrl.setRoot(TabsPage);
  }

  goHome(){
    this.navCtrl.push(LoginPage);
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
