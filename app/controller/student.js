const { student } = require("../model/index");
const db = require("../model/index")
const Student = db.student

exports.create = (req,res) => {
    console.log("Check");
    const newStudent = new Student({
        name: req.body.name,
        age:req.body.age
      });

       newStudent.save().then((student)=>{
        res.json({message:"Successfully Student Added"})
    }).catch((err)=>{
        res.json({error:err})
    })
  
    //     if (err) {
    //       res.status(500).send({ message: err });
    //       return;
    //     }
    //     res.status(200).json({ message: "Author Successfully Added", student });
    //   });
        
}