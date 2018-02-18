import { Component, OnInit } from '@angular/core';
import { Profile } from "../../models/profile/profile.interface";
import { DataService } from "../../providers/data/data";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { NavController } from "ionic-angular";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-online-users',
  templateUrl: 'online-users.component.html'
})
export class OnlineUsersComponent implements OnInit {

  userList: FirebaseListObservable<Profile[]>;
  selectedProfile: Profile;

  constructor(
    private data: DataService,
    private navCtrl: NavController
  ) {
  }

  ngOnInit() {
    this.setUserOnline();
    this.getOnlineUsers();
  }

  setUserOnline() {
    // Get the authenticated user
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      // call to a service that sets the user online within firebase
      this.data.setUserOnline(profile);
      this.selectedProfile = profile;
    });

  }

  getOnlineUsers() {
    this.userList = this.data.getOnlineUsers();
  }

  openChat(profile: Profile) {
    this.navCtrl.push("MessagePage", {
      profile: this.selectedProfile
    });
  }


}
