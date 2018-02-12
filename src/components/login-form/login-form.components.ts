import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login.response.interface';
import { AuthService } from '../../providers/auth/auth';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "app-login-form",
  templateUrl: "login-form.components.html"
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private auth: AuthService
  ) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {
    const result = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
  }

  navigateToRegisterPage() {
    this.navCtrl.push("RegisterPage");
  }

  // navigateToPage(pageName: string) {
  //   pageName === "TabsPage"
  //     ? this.navCtrl.setRoot(pageName)
  //     : this.navCtrl.push(pageName);
  // }
}
