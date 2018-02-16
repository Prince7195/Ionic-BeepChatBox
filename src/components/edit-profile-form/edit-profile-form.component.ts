import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';
import { Subscription } from "rxjs/Subscription";

import { DataService } from '../../providers/data/data';
import { AuthService } from '../../providers/auth/auth';
import { User } from 'firebase/app';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;
  @Input() profile: Profile;

  constructor(private data: DataService, private auth: AuthService) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    });
    this.saveProfileResult = new EventEmitter<Boolean>();
  }

  ngOnInit(): void {
    if(!this.profile) {
      this.profile = {} as Profile;
    }
  }

  async saveProfile() {
    if(this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
