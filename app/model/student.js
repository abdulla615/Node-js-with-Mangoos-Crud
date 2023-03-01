const mongoose = require("mongoose");

const Student = mongoose.model(
  "Student",
  new mongoose.Schema({
    name: {
      type: String,
      required: [true, "This is required field"],
    },
age:{
  type:Number
}
  })
);

module.exports = Student;
