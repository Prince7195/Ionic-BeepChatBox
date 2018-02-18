import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Channel } from "../../models/channel/channel.interface";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import "rxjs/add/operator/first";

import { ChannelMessage } from "../../models/channel/channel-message.interface";
import { Message } from "../../models/messages/message.interface";
import { AuthService } from "../auth/auth";

/*
  Generated class for the ChatService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ChatService {

  constructor(
    private database:  AngularFireDatabase,
    private auth: AuthService
  ) {
  }

  addChannel(channelName: string) {
    this.database.list("channel-names").push({
      name: channelName
    });
  }

  getChannelListRef(): FirebaseListObservable<Channel[]> {
    return this.database.list("channel-names");
  }

  getChannelChatRef(channelKey: string) {
    return this.database.list(`channels/${channelKey}`);
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage) {
    await this.database.list(`channels/${channelKey}`).push(message);
  }

  async sendChat(message: Message) {
    await this.database.list(`/messages`).push(message);
  }

  getChats(userTwoId: string) {
    return this.auth.getAuthenticatedUser()
      .map(auth => auth.uid)
      .mergeMap(uid => this.database.list(`/user-messages/${uid}/${userTwoId}`))
      .mergeMap(chats => {
        return Observable.forkJoin(
          chats.map(chat => this.database.object(`/messages/${chat.$key}`)
          .first()),
          (...vals: Message[]) => {
            return vals;
          }
        )
      })
  }

}
