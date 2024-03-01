const mongosh =require("mongoose");

mongosh
    .connect("mongodb://localhost:27017/myuser")
    .then(()=> console.log("Database coonnected.."))
    .catch((err)=>{
        console.log("Error Occured while connecting to Database...",err);
    })

const userschema = new mongosh.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    job_title:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    salary:{
        type: Number,
        required: true 
    }
})
    
const User = new mongosh.model("users",userschema);

module.exports = User