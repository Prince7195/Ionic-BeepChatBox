import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'firebase/app';

import { DataService } from '../../providers/data/data';
import { AuthService } from '../../providers/auth/auth';
import { Profile } from '../../models/profile/profile.interface';
import { LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {

  private authUser: User;
  public userProfile: Profile;
  private loader: Loading;

  @Output() existingProfile: EventEmitter<Profile>;

  constructor(
    private loading: LoadingController,
    private data: DataService,
    private auth: AuthService
  ) {
    this.loader = this.loading.create({
      content: "Loading Profile..."
    });
    this.existingProfile = new EventEmitter<Profile>();
  }

  ngOnInit(): void {
    this.loader.present();

    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.existingProfile.emit(this.userProfile);
      this.loader.dismiss();
    });
  }

}
