import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../providers/chat/chat";
import { Message } from "../../models/messages/message.interface";
import { Observable } from "rxjs/Observable";
import { NavController } from "ionic-angular";

/**
 * Generated class for the LastMessageListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-last-message-list',
  templateUrl: 'last-message-list.component.html'
})
export class LastMessageListComponent implements OnInit {

  messageList$: Observable<Message[]>;

  constructor(private chat: ChatService, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.messageList$ = this.chat.getLastMessagesForUser();
  }

  navigateToMessage(message: Message) {
    const selectedProfile = {
      $key: message.userToId,
      firstName: message.userToProfile.firstName,
      lastName: message.userToProfile.lastName
    };
    this.navCtrl.push("MessagePage", {
      profile: selectedProfile
    });
  }

}
