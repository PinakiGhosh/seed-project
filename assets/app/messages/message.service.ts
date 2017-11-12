import {Message} from "./message.model";
import {Injectable} from "@angular/core";
import {Http, Response,Headers} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService{
    private messages: Message[]= [];
    // constructor(private http:HttpClient){}
    constructor(private http:Http){}

    addMessage(message:Message){
        this.messages.push(message);
        const body=JSON.stringify(message);
        console.log("Message is ");
        console.log(body);
        const headers=new Headers({
           'Content-Type':'application/json'
        });
        return this.http.post('http://localhost:3001/message',body,{headers:headers})
            .map((response : Response) => response.json())
            .catch((error : Response) => Observable.throw(error.json()));
    }

    getMessages(){
        return this.http.get('http://localhost:3001/message')
            .map((response : Response)=> {
                const messages=response.json().obj;
                let transformedMessages:Message[] =[];
                for(let message of messages){
                    transformedMessages.push(new Message(message.content,'Dummy',message._id,null));
                }
                this.messages=transformedMessages;
                return transformedMessages;
            })
            .catch((error : Response) => Observable.throw(error.json()));
    }

    deleteMessage(message:Message){
        console.log("Trying to delete message");
        console.log("Index is "+this.messages.indexOf(message));
        this.messages.splice(this.messages.indexOf(message),1);
        console.log("Message deleted");
    }
}