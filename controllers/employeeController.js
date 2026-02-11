const employees=require('../model/employeeModel')

exports.addEmployeeController=async(req,res)=>{
    console.log("Inside addEmployeeController");
    const{name,email,designation,salary}=req.body
    try{
        const existingEmployee=await employees.findOne({email})
        if(existingEmployee)
        {
            res.status(406).json("Employee Already exist!!")
        }
        else
        {
            const newEmployee=new employees({
                name,email,designation,salary
            })

            await newEmployee.save()
            res.status(200).json(newEmployee)
        }

    }catch(err)
    {
        res.status(401).json(err)
    }
    
}