import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from '../user/user';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private input: string = ''

  ionViewDidLoad() {
  }

  goToInfo(){
    this.navCtrl.push(UserPage);
  }

}
