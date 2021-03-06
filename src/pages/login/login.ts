import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from 'firebase/app';

import { LoginResponse } from '../../models/login/login.response.interface';
import { DataService } from '../../providers/data/data';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    private toast: ToastController,
    private navCtrl: NavController,
    private navParams: NavParams,
    private data: DataService
  ) {
  }

  login(event: LoginResponse) {
    if(!event.error) {
      this.toast.create({
        message: `Welcome to Beep ${event.result.email}`,
        duration: 3000
      }).present();

      this.data.getProfile(<User>event.result).subscribe(profile => {
        profile.val() ? this.navCtrl.setRoot("TabsPage") : this.navCtrl.setRoot("EditProfilePage");
      });
    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }


}
