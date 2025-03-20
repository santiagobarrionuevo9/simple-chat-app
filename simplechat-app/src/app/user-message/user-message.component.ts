import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';  


@Component({
  selector: 'app-user-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-message.component.html',
  styleUrl: './user-message.component.css'
})
export class UserMessageComponent {
  @Input() user: string = '';
  @Output() messageSent = new EventEmitter<{user: string, text: string}>();
  
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messageSent.emit({user: this.user, text: this.newMessage});
      this.newMessage = '';
    }
  }
}
