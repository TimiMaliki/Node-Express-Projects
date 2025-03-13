// FS (sync)


const {readFileSync , writeFileSync} = require('fs')

const first = readFileSync('./subfolder/first.txt'  , 'utf-8')
const second = readFileSync('./subfolder/second.txt'  , 'utf-8')

console.log(first,second)

writeFileSync('./subfolder/third.txt' , `${first} ${second} and i'm 25 years old`)