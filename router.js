const express = require("express");
const router = express.Router();

const {getuser,insertuser,updateuser,deleteuser} = require("./middleware");
const { model } = require("mongoose");

router.get("/getuser/:id",getuser);

router.post("/adduser",insertuser);

router.put("/updatevalue",updateuser);

router.delete("deleteuser/:id",deleteuser);

module.exports = router;