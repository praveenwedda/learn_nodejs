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

// const { readFileSync, writeFileSync } = require("fs");

// const r1 = readFileSync("./content/text.txt", "utf8");
// console.log(r1);

// const p = "Praveen will be a great coder in the name of Jesus!";

// writeFileSync("./content/result.txt", p);
// const r2 = readFileSync("./content/result.txt", "utf8"); //when you are writing to a file, the content it has prior to writing attempt gets erased pr
// console.log(r2);

//-------------Above is about reading and writing to files using fs module------------

// const { log } = require("console");
// const {readFile, writeFile, writeFileSync} = require("fs")

// readFile("./content/first.txt", "utf8", (err, result) => {
//     if (err){
//         console.log(err);
//         return
//     }

//         const first = result;
//         console.log(first);

//         readFile("./content/second.txt", "utf8", (err, result) => {
//             if (err){
//                 console.log(err);
//                 return
//             }

//                 const second = result
//                 console.log(second);
//                 writeFile("./content/result.txt", `first item is ${first} and second item is ${second}`, {flag: 'a'}, (err, result)=>{
//                     if(err){
//                         console.log(err);
//                     }

//                     console.log(result);

//                 });

//     })

// })

//------------playing around with http module-------------------------------------------------------

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(`request received`);
//   if (req.url === "/") {
//     res.end("this is the home page");
//   } else if (req.url === "/about") {
//     res.end("this is the about page");
//   } else if (req.url === "/portfolio") {
//     res.end("this is the portfolio page");
//   } else {
//     res.end(`
//     <h1>Oops something went wrong!</h1>
//      <a href = "/">Home</a>`);
//     // res.write("Hello world!")
//     // res.end()
//   }
// });

// server.listen(5000, () => {
//   console.log(`server listening to port 5000...`);
// // });

// //-----------------------reading multiple files----------------------------------------------

// const { get } = require("http");

// // readFile("./content/first.txt", "utf8", (err, data) => {
// //   if (err) {
// //     console.log(err);
// //     return;
// //   } else {
// //     console.log(data);
// //   }
// // });

// //------------------------turning above code to a promise---------------------------------------

// // const getText = (path) => {
// //   return new Promise((resolve, reject) => {
// //     readFile(path, "utf8", (err, data) => {
// //       if (err) {
// //         console.log(err);
// //         reject(err);
// //       } else {
// //         resolve(data);
// //       }
// //     });
// //   });
// // };

// // getText("./content/first.txt")
// //   .then((result) => console.log(result))
// //   .catch((err) => console.log(err));

// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// //

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf8");
//     const second = await readFilePromise("./content/second.txt", "utf8");
//     await writeFilePromise(
//       "./content/result.txt",
//       `|||| || | ${first} and ${second}`
//     );
//     const third = await readFilePromise("./content/result.txt", "utf8");
//     console.log(third);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

//----------event management work below this---------------------------------------------------

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received of user ${name} with ID ${id}`);
});

customEmitter.on("response", (name, id, other) => {
  console.log(`something else of ${other}`);
});

customEmitter.emit("response", "Praveen", 2300, "hey");

//-------------turning up a server using events----------------------------------------------------
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(`request received`);
  if (req.url === "/") {
    res.end("this is the home page");
  }
});

server.listen(5000, () => {
  console.log(`server listening to port 5000...`);
});

//-----server event does not emit anything---------------
