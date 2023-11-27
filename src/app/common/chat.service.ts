import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
 

  constructor(private httpService: HttpService) {}


  sendMessage(message: string): Observable<any> {
    const body = { message: message };
    return this.httpService.postRequest(
      `chat_bot`,body
    );
  }

}
