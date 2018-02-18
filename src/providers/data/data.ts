import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { User } from "firebase/app";
import { database } from "firebase";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

import { Profile } from '../../models/profile/profile.interface';
import { AuthService } from "../auth/auth";

/*
  Generated class for the DataService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>;
  profileList: FirebaseListObservable<Profile>;

  constructor(
    private database: AngularFireDatabase,
    private auth: AuthService
  ) {
  }

  searchUser() {
    const query = this.database.list("profiles");
    return query.take(1);
  }

  getAuthenticatedUserProfile() {
    return this.auth.getAuthenticatedUser()
      .map(user => user.uid)
      .mergeMap(authId => this.database.object(`/profiles/${authId}`))
      .take(1);
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
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  setUserOnline(profile: Profile) {
    const ref = database().ref(`online-users/${profile.$key}`);
    try {
      ref.update({ ...profile });
      ref.onDisconnect().remove();
    } catch(err) {
      console.log(err);
    }
  }

  getOnlineUsers(): FirebaseListObservable<Profile[]> {
    return this.database.list('online-users');
  }

}

/**
 * const query = this.database.list("/profiles/", ref => ref.orderByChild('firstName').equalTo(firstName));

   const query = this.database.list("/profiles/", {
      query: {
        orderByChild: "firstName",
        equalTo: firstName
      }
    });
 */
