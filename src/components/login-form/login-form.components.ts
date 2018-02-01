import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  text: string;

  constructor(private navCtrl: NavController) {}

  navigateToPage(pageName: string) {
    pageName === "TabsPage"
      ? this.navCtrl.setRoot(pageName)
      : this.navCtrl.push(pageName);
  }
}
