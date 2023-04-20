const studentModel = require("../model/studentModel")

exports.createStudent = async (req, res)=>{
    try{
        const {name, age, email, phone} = req.body

        const studentData = {
            name: name,
            age: age,
            email: email,
            phone: phone
        }
        let savedData = await studentModel.create(studentData)
        res.status(201).send({status: true, data: savedData})
    } catch(error){
        res.status(500).send(error)
    }
}