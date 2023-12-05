const router = express.Router();
import Home from "../Models/Student.js";
import express from "express";

router.post("/re", async (req, res) => {
  try {
    let data = await new Home({ ...req.body }).save();
    res.status(201).send({data:data, message: "data has been added successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      data: error,
    });
  }
});

router.get("/allstudents", async (req, res) => {
  try {
    Student.find().then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
});


router.put('/:id', async(req, res) => { 

  try{

let data= await  Student.findByIdAndUpdate({_id: req.params.id}, {$set: req.body});
      res.status(200).send({
        message: "success"})
  }catch(error){
      res.status(500).send({
          message: "Internal Server Error"
      })
  }
});


router.delete("/delete/:studentID",async(req,res)=>{
    try{
await Student.deleteOne({_id:req.params.studentID});
  
    res.status(200).send({message:`deleted id ${req.params.studentID} successfully`})
    }
    catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });  
    }
})
export default router;
