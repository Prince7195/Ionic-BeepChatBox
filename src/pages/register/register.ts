import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login.response.interface';
import { AuthService } from "../../providers/auth/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private auth: AuthService
  ) {
  }

  register(event: LoginResponse) {
    if(!event.error) {
      this.toast.create({
        message: `Account Created: ${event.result.email}, please login.`,
        duration: 3000
      }).present();
      this.auth.signOut();
      this.navCtrl.setRoot('LoginPage');
    } else {
      this.toast.create({
        message: `Account not Created: ${event.error.message}`,
        duration: 3000
      }).present();
    }
  }

}
