//   const {Timi, jose} = require("./name")
const names = require("./name")

// const  sayHi = require("./app")

  const greet = require("./modules")

//   console.log(names)


  greet(names.Timi)
  greet(names.jose)


//   sayHi(names.Timi)
//   sayHi(names.jose)

  console.log(greet)

  const helloFriend = () => {
    console.log(`my friends name is ${names.Timi}`)
  }

  helloFriend()
