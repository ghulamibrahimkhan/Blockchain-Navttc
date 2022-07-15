const os = require('os')

// info abour current user
const user = os.userInfo()
console.log(user);

// returns the system uptime
console.log('The sysytem uptime is '+ os.uptime());

const currentOs = {
    name: os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOs.release);
console.log(currentOs.freeMem);