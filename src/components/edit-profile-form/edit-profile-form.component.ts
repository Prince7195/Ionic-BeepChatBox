import { Component } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';

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
export class EditProfileFormComponent {

  profile = {} as Profile;

  constructor() {

  }

  saveProfile() {

  }

}
