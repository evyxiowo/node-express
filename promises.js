const { readFile } = require("fs");

const getData = (p) => {
  return new Promise((resolve, reject) => {
    readFile(p, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

getData("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
