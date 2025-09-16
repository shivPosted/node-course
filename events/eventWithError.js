import { EventEmitter } from "node:events";

const myEvent = new EventEmitter();

myEvent.on("error", (err) => {
  console.log(`error occured: ${err.message}`);
});

myEvent.emit("error", new Error("Something went wrong"));
