import ChatRoom from "./chatRoom.js";

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`👋 , ${user} has joined the chat`);
});

chat.on("message", (user, message) => {
  console.log(`🖊️ ${user} has sent: ${message}`);
});
chat.on("leave", (user) => {
  console.log(`🥲 ${user} has left the chat`);
});

chat.join("Shiv");
chat.join("Rohit");
chat.join("Rangiku");

chat.sendMessage("Shiv", "hello everyone");
chat.sendMessage("Rohit", "How is everyone?");
chat.sendMessage("Rangiku", "yo whatup whatup");

chat.sendMessage("Neeru", "How are you all"); //user not exist;

chat.leave("Shiv");
chat.sendMessage("Shiv", "new hello everyone");

chat.leave("Shiv");
chat.leave("Rohit");
chat.leave("Rangiku");
