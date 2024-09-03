const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync("./content/newWritten.txt", `This is sigma daddy wolf`, {
  flag: "a",
});

console.log(first, second);
