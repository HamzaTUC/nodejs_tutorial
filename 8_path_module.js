const path = require("path")

console.log(path.sep)

const filePath = path.join("/content", "subfolder", "text.txt") 
console.log("(joined) filepath is" ,filePath)

const base = path.basename(filePath)
console.log("base path is: ", base) 

const absolute = path.resolve(__dirname , "content", "subfolder", "text.txt") 
console.log("absolute path is: ", absolute)