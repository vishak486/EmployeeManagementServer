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

exports.fetchEmployeeController=async(req,res)=>{
    console.log("Inside fetchEmployeeController");
    try
    {
        const AllEmployees=await employees.find()
        res.status(200).json(AllEmployees)
    }
    catch(err)
    {
        res.status(401).json(err)
    }    
}

exports.deleteEmployeeController=async(req,res)=>{
    console.log("Inside deleteEmployeeController");
    const {id} = req.params
    try
    {
        const deleteEmployee = await employees.findByIdAndDelete(id)
        if(deleteEmployee)
        {
            res.status(200).json("Employee deleted successfully")
        }
        else
        {
            res.status(404).json("Employee not found")
        }
    }
    catch(err)
    {
        res.status(401).json(err)
    }

}

exports.updateEmployeeController=async(req,res)=>{
    console.log("Inside updateEmployeeController");
    const {id}=req.params
    const{name,email,designation,salary}=req.body
    try
    {
        const updateEmployee=await employees.findByIdAndUpdate(id,{
            name,email,designation,salary
        },{new:true})
        res.status(200).json(updateEmployee)
    }
    catch(err)
    {
        res.status(401).json(err)
    }  
}
