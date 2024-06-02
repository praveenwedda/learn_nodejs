//setting up the required files to run the code below
// const requiredModule1 = require("./namer.js");
// const requiredModule2 = require("./names.js");

// console.log(requiredModule1);
// console.log(requiredModule2);

// requiredModule1.namer(requiredModule2.name1);
// // namer(name2);
// // namer(name3);

// const os = require("os");

// const userinfo = os.userInfo();
// console.log(userinfo);
// console.log(os.uptime());

// const currentsystemstat = {
//   name: os.type(),
//   release: os.release(),
//   totalMemory: os.totalmem(),
//   freeMemory: os.freemem(),
// };

// console.log(currentsystemstat);

function fibo(n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

let num = 0;

function runner(num) {
  console.log(fibo(num));
  num++;
  runner(num);
}

runner(num);

//-------------Above is how we recurse to get fibonacci series--------------------------
