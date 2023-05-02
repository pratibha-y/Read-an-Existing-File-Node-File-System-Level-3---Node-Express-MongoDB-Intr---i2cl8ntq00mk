const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
await fs.readFile(fileName);
  // write code here
	// dont change function name
  
};


module.exports =  reader ;
