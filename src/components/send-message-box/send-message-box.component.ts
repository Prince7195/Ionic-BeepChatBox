import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SendMessageBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-send-message-box',
  templateUrl: 'send-message-box.component.html'
})
export class SendMessageBoxComponent {

  @Output() sengMessage: EventEmitter<string>;
  content: string;

  constructor() {
    this.sengMessage = new EventEmitter<string>();
  }

  send() {
    console.log(this.content);
    this.sengMessage.emit(this.content);
    this.content = "";
  }

}
