const EventEmitter = require("events");

const event = new EventEmitter();

event.on("message", (name, id) => {
  console.log(`Hey this is my ${name} and ${id}`);
});

event.emit("message", "xievy", 19);
