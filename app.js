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

// function fibo(n) {
//   if (n === 0) {
//     return 1;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fibo(n - 1) + fibo(n - 2);
//   }
// }

// let num = 0;
// let thatarray = [];

// function runner(num) {
//   thatarray.push(fibo(num));
//   console.log(thatarray);
//   num++;
//   runner(num);
// }

// runner(num);

//-------------Above is how we recurse to get fibonacci series--------------------------

// const k = require("path");
// // console.log(k);

// const c = k.sep;
// // console.log(c);

// const a = k.resolve(__dirname, "app.js");
// // console.log(a);

// const b = k.join("app.js", "namer.js"); //put a directory inside another
// // console.log(b);

// const f = k.basename(b);
// console.log(f);
//----------------------Above is everything we did in terms of path module--------------

const { readFileSync, writeFileSync } = require("fs");

const r1 = readFileSync("./content/text.txt", "utf8");
console.log(r1);

const p = "Praveen will be a great coder in the name of Jesus!";

writeFileSync("./content/result.txt", p);
const r2 = readFileSync("./content/result.txt", "utf8"); //when you are writing to a file, the content it has prior to writing attempt gets erased pr
console.log(r2);

//-------------Above is about reading and writing to files using fs module------------
