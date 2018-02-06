import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { ToastController } from "ionic-angular";

import { Account } from "../../models/account/account.interface"

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "app-register-form",
  templateUrl: "register-form.component.html"
})
export class RegisterFormComponent {

  account = {} as Account;

  constructor(private toast: ToastController, private afAuth: AngularFireAuth) {}

  async register() {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        this.account.email, this.account.password
      );
      this.toast.create({
        message: "Account Successfully Created",
        duration: 3000
      }).present();
      console.log(result);
    }
    catch (err) {
      console.log(err);
      this.toast.create({
        message: err.message,
        duration: 3000
      }).present();
    }
  }

}
