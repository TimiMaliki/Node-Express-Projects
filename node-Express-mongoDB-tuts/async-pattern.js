const {readFile,writeFile} = require('fs')
const util = require('util')


const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve,reject)=> {

//         readFile( path, 'utf-8' , (err, result) => {

//             if(err){
//                reject(err)
//             }else{
//               resolve(result)
//             }
            
            
//         })
//     })
// }

// getText('./subfolder/first.txt').then((result) => console.log(result)).catch((err) => console.log(err))


const start = async() =>{
    try{
      const first = await readFilePromise('./subfolder/first.txt', 'utf-8')
      const second = await readFilePromise('./subfolder/second.txt', 'utf-8')
      await writeFilePromise('./subfolder/progress.txt', "making progress")
      console.log(first, second)
    }catch(err){
        console.log(err)
    }
}

start()