const os = require("os");
const currentOS = {
  OSplatform: os.platform(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  homedir: os.homedir(),
  name: os.userInfo(),
};

const user = os.userInfo();

console.log(user);
console.log(`Up time: ${Math.floor(os.uptime / 60 / 60)} minutes`);
console.log(currentOS);
