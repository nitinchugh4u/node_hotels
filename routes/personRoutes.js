const  express = require('express')
const router = express.Router()
const Person = require('./../models/person');
const { find } = require('lodash');
const { findByIdAndUpdate } = require('../models/menuItem');





router.post('/', async(req, res) => {

    try{
    const data = req.body; 
    // assuming req.body contains the person data
  
    // Create a new instance of the Person model
    const newPerson = new Person(data);
  
    // Save the new person to the database
   const response = await newPerson.save()
   console.log("data saved")
   res.status(200).json(response)
  }
     // Save the new person to the database
     catch(err){
      console.log(err)
      res.status(500).json({error:"internal server error"})
  
     }
  
 });


//  get method to get the person

router.get("/", async(req,res)=>{
 
   try{
     const data = await Person.find()
     console.log("data  fetched")
     res.status(200).json(data)
   }
   catch(error){
     console.log(error)
     res.status(500).json({error:"internal server erorr"})
 
   }
 
 })


 
 router.get("/:workType",async(req,res)=>{
    try{
      const workType =req.params.workType //extarct the work type  from the url  parameter
       if(workType=="chef"|| workType== "manager"|| workType=="waiter"){
        const response = await Person.find({work:workType})
        console.log("response fetched")
        res.status(200).json(response)
  
  
       }
       else{
        res.status(404).json({error:"invalid work type"})
  
       }
  
    }
    catch(error){
      console.log(error)
      res.status(500).json({error:"internal server error"})
  
    }
  
  })

  router.put('/:id',async(req,res)=>{

    try{

        const personId=  req.params.id;  //extract the id from the url parammtere
        const updatedPersonData= req.body //updated data for the person


        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,//return the updated document
            runValidators:true //run mongoose validation

        })
        if(!response){
            return res.status(404).json({error:"person not found"})
        }

        console.log("data updated")

        res.status(200).json(response);


    }
    catch(error){
        console.log(error)
        res.status(500).json({error:"internal server error"})

    }
  })




  router.delete('/:id',async(req,res)=>{

    try{

        const personId=  req.params.id;  //extract the id from the url parammtere

        

        const response = await Person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error:"person not found"})
        }

        console.log("data delete")

        res.status(200).json({message:"person deleted succesfully"});


    }
    catch(error){
        console.log(error)
        res.status(500).json({error:"internal server error"})

    }
  })









  





  module.exports = router;
 
  
