const router = express.Router();
import Date from "../Models/Dates.js";
import express from "express";

router.post("/add", async (req, res) => {
  try {
    let data = await new Date({ ...req.body }).save();
    res.status(201).send({data:data, message: "data has been added successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      data: error,
    });
  }
});

router.get("/alllist", async (req, res) => {
  try {
   Date.find().then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
});

router.delete("/delete/:dateID",async(req,res)=>{
    try{
await Date.deleteOne({_id:req.params.dateID});
  
    res.status(200).send({message:`deleted id ${req.params.dateID} successfully`})
    }
    catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });  
    }
})


export default router;