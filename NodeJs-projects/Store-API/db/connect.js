const mongoose = require('mongoose')

const connectDB =  (url) => {
  return mongoose.connect(url, {
    
  })

//  return  mongoose.connect(url)
//   .then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch(err => console.error("❌ MongoDB connection error:", err));
}


module.exports = connectDB
