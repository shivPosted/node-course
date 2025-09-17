import { Buffer } from "node:buffer";

const buf1 = Buffer.from("Shiv");
const buf2 = Buffer.alloc(6);
const buf3 = Buffer.alloc(6, "b");

const buf4 = Buffer.from([1, 2, 3]);
const buf5 = Buffer.from([257, 255.5, -256]);
const buf6 = Buffer.from("Hello World");
console.log(buf6.toString("hex"));

const hindiStr = "नमस्ते दुनया";
const buf7 = Buffer.from(hindiStr);
console.log(buf7.toString());
console.log(buf6.length);
