import { EventEmitter } from "node:events";

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", () => {
  console.log("Hello we are learning about evnets in node");
});

eventEmitter.on("greet", (user) => {
  console.log(`Hello ,${user} we are learning about events in node`);
});

eventEmitter.once("runOnce", () => {
  console.log("This event will run only one time");
});

const myTestListener = (testNum) =>
  console.log(`this is a test-${testNum} function`);

eventEmitter.on("test", myTestListener);

eventEmitter.emit("greet", "Shiv"); //NOTE: will emit all the 'greet' event

eventEmitter.emit("runOnce");

eventEmitter.emit("test", 1);
eventEmitter.emit("test", 2);

eventEmitter.removeListener("test", myTestListener);
eventEmitter.emit("test", 3);
