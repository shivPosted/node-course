import { EventEmitter } from "node:events";

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }

  sendMessage(user, message) {
    if (!this.users.has(user)) {
      return console.log(`${user} , does not exist`);
    }
    this.emit("message", user, message);
  }

  leave(user) {
    if (!this.users.has(user)) {
      return console.log("There is no one named ${user} in the chatroom");
    }
    this.emit("leave", user);
  }
}

export default ChatRoom;
