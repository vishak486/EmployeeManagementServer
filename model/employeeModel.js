const mongoose=require('mongoose')

const employeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('employees',employeeSchema)