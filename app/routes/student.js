const express = require('express')
const router = express.Router()
const {create} = require('../controller/student')
//destructuring

router.post('/',create)

module.exports = router
// destructuring
// let student = {
//     name:"Ahmed",age:25
// }

// let {name} = student