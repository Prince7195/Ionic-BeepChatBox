import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database-deprecated";
import { User } from "firebase/app";
import "rxjs/add/operator/take";

import { Profile } from '../../models/profile/profile.interface';

/*
  Generated class for the DataService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>;

  constructor(private database: AngularFireDatabase) {
  }

  getProfile(user: User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`, { preserveSnapshot: true });
    return this.profileObject.take(1);
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true;
    } catch(err) {
      console.log(err);
      return false;
    }
  }

}
