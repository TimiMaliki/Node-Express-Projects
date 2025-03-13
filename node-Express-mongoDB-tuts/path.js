const path = require('path')

console.log(path.sep)

const filePath =  path.join('/subfolder' , 'sub.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const resolve =  path.resolve(__dirname , "subfolder" , "sub.txt")
 console.log(resolve)