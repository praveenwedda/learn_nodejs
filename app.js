//setting up the required files to run the code below
const requiredModule1 = require("./namer.js");
const requiredModule2 = require("./names.js");

console.log(requiredModule1);
console.log(requiredModule2);

requiredModule1.namer(requiredModule2.name1);
// namer(name2);
// namer(name3);
