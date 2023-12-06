import { Component } from '@angular/core';
import { ChatService } from './common/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatBot';


  userMessage = '';
  messages: { text: string, sender: string }[] = [];

  constructor(private chatService: ChatService) {}
  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ text: this.userMessage, sender: 'user' });
      this.chatService.sendMessage(this.userMessage).subscribe(
        response => {
          // Utilisez response.response au lieu de response.answer
          this.messages.push({ text: response.response, sender: 'bot' });
          console.log(response);
        },
        error => console.error(error)
      );
      this.userMessage = '';
    }
  }


  refresh(){
    window.location.reload();
  }
  
}
