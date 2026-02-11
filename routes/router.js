const express=require('express')

const employeeController=require('../controllers/employeeController')

const router=express.Router()

router.post('/addEmployee',employeeController.addEmployeeController)

module.exports=router