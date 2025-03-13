const {writeFileSync, createReadStream} = require('fs')

for(let i = 0; i < 10000; i++){
    writeFileSync('./subfolder/big.txt', `hello${i}\n`, {flag: 'a'} )

 
}

const stream = createReadStream('./subfolder/big.txt')

stream.on('data', (results)=>{
       console.log(results)
})