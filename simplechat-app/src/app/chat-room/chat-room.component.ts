import { Component } from '@angular/core';
import { UserMessageComponent } from "../user-message/user-message.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [UserMessageComponent,CommonModule],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export class ChatRoomComponent {
  messages: {user: string, text: string}[] = [];

  addMessage(message: {user: string, text: string}) {
    this.messages.push(message);
  }
}
