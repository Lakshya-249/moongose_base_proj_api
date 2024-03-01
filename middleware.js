const User = require("./databse_cn");

const getuser = async (req,res)=>{
    const {id} = req.params;
    // const empobj = await User.findById(id);
    const empobj = await User.find({_id:`${id}`});
    console.log(empobj);
    if(!empobj.length){
        return res.status(404).json({success:false,message:`No employee with id: ${id}`});
    }
    res.status(200).json({success: true, Data: empobj});
}

const insertuser = async (req,res)=>{
    const q = req.body;
    if(
        !q ||
        !q.firstname ||
        // !q.lastname ||
        !q.email ||
        !q.job_title ||
        !q.age ||
        !q.salary
    ){
        return res.status(400).json({success: false,message: "All parameters are required..."});
    }
    const resp = await User.create({
        firstname: q.firstname,
        lastname: q.lastname,
        email: q.email,
        job_title: q.job_title,
        age: q.age,
        salary: q.salary
    })
    return res.status(200).json({success:true, message:"Data inserted successfully..."})
}

const updateuser = async (req,res)=>{
    const qbody = req.query;
    if(!qbody.id){
        return res.status(400).json({success:false, message:"Id of the employee required..."});
    }
    const empid = await User.findById(qbody.id);
    if(!empid){
        return res.status(404).json({success: false, message:`No employe with id: ${qbody.id}`});
    }
    if(qbody.firstname){await User.updateOne({_id:`${qbody.id}`},{$set:{firstname: qbody.firstname}}) };
    if(qbody.lastname){await User.updateOne({_id:`${qbody.id}`},{$set:{lastname: qbody.lastname}}) };
    if(qbody.email){await User.updateOne({_id:`${qbody.id}`},{$set:{email: qbody.email}}) };
    if(qbody.job_title){await User.updateOne({_id:`${qbody.id}`},{$set:{job_title: qbody.job_title}}) };
    if(qbody.salary){await User.updateOne({_id:`${qbody.id}`},{$set:{salary: qbody.salary}}) };

    res.status(200).json({success: true, message: `Data Upadated successfully for id: ${qbody.id}`});
}

const deleteuser = async (req,res)=>{
    const {id} = req.params;
    const empid = await User.findById(id);
    if(!empid){
        return res.status(404).json({success: false, message:`No employe with id: ${id}`});
    }
    await User.deleteOne({_id:`${id}`});
    res.status(200).json({success: true, message: "Data deleted successfully..."});
}

module.exports = {getuser,insertuser,updateuser,deleteuser};