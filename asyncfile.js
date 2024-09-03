const { readFile, writeFile } = require("fs");
console.log("starting file");

readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  const first = data;
  readFile("./content/second.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("error reading file:", err);
      return;
    }
    const second = data;
    writeFile(
      "./content/asyncWrite.txt",

      `Hey sigma this is a write file.txt skibidi dop dop dop and this is ${first} , ${second}`,
      (err, data) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
        console.log("Check the new file asynchronwirteenth");
      }
    );
  });
  console.log("done with this file");
});

const sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 10));
