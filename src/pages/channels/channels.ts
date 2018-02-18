import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatService } from "../../providers/chat/chat";
import { Channel } from "../../models/channel/channel.interface";
import { FirebaseListObservable } from "angularfire2/database-deprecated";

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: FirebaseListObservable<Channel[]>;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private navParams: NavParams,
    private chat: ChatService
  ) {
  }

  ionViewWillLoad() {
    // Get channels
    this.getChannels();
  }

  showAddChannelDialog() {
    this.alertCtrl.create({
      title: "Channel Name",
      inputs: [{
        name: "channelName"
      }],
      buttons: [{
        text: 'cancel',
        role: 'cancel'
      },{
        text: "Add",
        handler: data => {
          this.chat.addChannel(data.channelName);
        }
      }]
    }).present();
  }

  getChannels() {
    this.channelList = this.chat.getChannelListRef();
  }

  selectChannel(channel: Channel) {
    this.navCtrl.push('ChannelChatPage', { channel });
  }

}
