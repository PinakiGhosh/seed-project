import {Message} from "./message.model";

export class MessageService{
    private messages: Message[]= [];

    addMessage(message:Message){
        this.messages.push(message);
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message:Message){
        console.log("Trying to delete message");
        console.log("Index is "+this.messages.indexOf(message));
        this.messages.splice(this.messages.indexOf(message),1);
        console.log("Message deleted");
    }
}