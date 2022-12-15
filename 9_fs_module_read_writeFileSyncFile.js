const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

console.log("first file content: ", first)
console.log("second file content: ", second)

writeFileSync("./content/result-sync.txt", `the result of both files: ${first}, ${second}`,
{flag: "a"}
)