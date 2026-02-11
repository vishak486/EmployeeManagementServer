const mongoose=require('mongoose')

const connectionString=process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log('Mongodb Connected Successfully');
}).catch(err=>{
    console.log('MongoDb Connection Failed');
    console.log(err);
})


