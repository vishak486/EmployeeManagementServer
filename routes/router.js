const express=require('express')

const employeeController=require('../controllers/employeeController')

const router=express.Router()

router.post('/addEmployee',employeeController.addEmployeeController)
router.get('/getEmployee',employeeController.fetchEmployeeController)
router.delete('/deleteEmployee/:id',employeeController.deleteEmployeeController)
router.put('/updateEmployee/:id',employeeController.updateEmployeeController)


module.exports=router