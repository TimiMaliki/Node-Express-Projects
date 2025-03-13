// fs-async
const {readFile , writeFile} = require('fs')


readFile('./subfolder/first.txt' , 'utf-8' , (err, result) => {
if(err){
    console.log(err)
    return;
}

 const first = result

 readFile('./subfolder/second.txt' , 'utf-8' , (err, result) => {
 
    if(err){
        console.log(err)
        return;
    }
     console.log(result)

     const second = result
    
    writeFile('./subfolder/results' , `You are making progress - ${first},${second} ` , (err , result) =>{
          if(err){
            console.log(err)
            return;
          }
          console.log(result)
    })

    })
    
    
})

