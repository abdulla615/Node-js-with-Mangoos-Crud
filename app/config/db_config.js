// module.exports = {
//     url: "mongodb://localhost:27017/school"
//   };
  
  const mongoose = require("mongoose");
//const key = require("./keys");


let  url= "mongodb://localhost:27017/school";

//Connecting to the database
mongoose.connect(url);
mongoose.Promise = global.Promise;
let connection = mongoose.connection;

//Check for Errors
connection.on("error", (err) => {
  if (err) {
    console.log(err);
  }
});

//Check for connections
connection.once("open", () => {
  console.log(`connection successful!`);
});

module.exports = connection;
