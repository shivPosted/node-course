import EventEmitter from "node:events";

class Chat extends EventEmitter {
  sendMessage(msg) {
    console.log(`Sending the messsage: ${msg}`);
    this.emit("message", msg);
  }
}

const newChat = new Chat();

newChat.on("message", (message) => {
  console.log("Message recieved", message);
});

newChat.sendMessage("Hello Shiv");
