// const {CustomAPIError} = require('../error/custom-error')

const errorHandlerMidWare = (err,req,res,next)=> {
   console.log(err)
//  if(err instanceof CustomAPIError){
//     return res.status(err.statusCode).json({msg:err.message})
//  }
   
    return res.status(500).json({msg:`something went wrong ,please try again `})
}

module.exports = errorHandlerMidWare