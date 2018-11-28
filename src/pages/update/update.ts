import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ProfileProvider } from '../../providers/profile/profile'


@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  constructor(private navCtrl: NavController, private profileProvider: ProfileProvider, private navParams: NavParams) {
    const { id_profile, image, info, id_user } = navParams.get('item');
    this.id_profile = id_profile
    this.image = image
    this.info = info
    this.id_user = id_user
  }

  private id_profile: string = ''
  private image: string = ''
  private info: string = ''
  private id_user: string = ''

  saveUpdate(){
    this.profileProvider.updateProfile(this.id_profile, this.image, this.info, this.id_user).subscribe((data) => {
      console.log(data)
      this.navCtrl.setRoot(ProfilePage)
    }, (error) => {
      console.log(error)
    })
  }

}
