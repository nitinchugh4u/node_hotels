// function add(a,b){
//  return a+b;
// }
// const res = add(2,77)
// console.log(res)

const { json } = require("express")


// const fs = require("fs");
// const os = require("os");
// var user = os.userInfo();

// console.log(user);
// fs.appendFile("greeting.txt", "hello hey" + user.username + "!\n", () => {});

// const notesData = require('./notes')
// var _ = require('lodash');
// console.log("server is also running")
// console.log(notesData.age)

// console.log(notesData.add(3,4))

// let arr = [1,2,3,4,5,"nitin","nitin","rahul"]
// const filter =  _.uniq(arr)
// console.log(filter)  

// let obj ={
//     name:"nitin",
//     city:"delhi",
//     school:"dis"
// }
// console.log(obj)

// let obj1 = JSON.stringify(obj)
// console.log(obj1)
// console.log(typeof obj1)

// let obj3 = {
//     "name":"nitin",
//     "city":"delhi",
//     "school":"dis"
// }
// console.log(obj3)


// let jsonString = '{"name":"nitin","city":"delhi","school":"dis"}';
// let obj = JSON.parse(jsonString);
// console.log(obj.name);  // Outputs: nitin



// let obj3 = '{"name":"nitin","city":"delhi","school":"dis"}';
// let obj4 =JSON.parse(obj3)
// console.log(obj4)
// console.log(typeof obj4)



// start express



const express = require('express')
const app = express()

const db = require('./db')
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.json()


// const Person = require('./models/person')
// const MenuItems= require("./models/menuItem")

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/foods",function(req,res){
  res.send("here is your foods")
})

app.get("/restaurant",function(req,res){
  let obj ={
    name:"samosa",
    price:'50'

  }
  res.send(obj)

})
// app.post('/person', (req, res) => {
//   const data = req.body; 
//   // assuming req.body contains the person data

//   // Create a new instance of the Person model
//   const newPerson = new Person(data);

//   // Save the new person to the database
//   newPerson.save((error, savedPerson) => {
//     if (error) {
//       console.log("Error saving person:", error);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       console.log("Data sent successfully");
//       res.status(200).json(savedPerson);
//     }
//   });
// });





// app.post('/person', async(req, res) => {

//   try{
//   const data = req.body; 
//   // assuming req.body contains the person data

//   // Create a new instance of the Person model
//   const newPerson = new Person(data);

//   // Save the new person to the database
//  const response = await newPerson.save()
//  console.log("data saved")
//  res.status(200).json(response)
// }
//    // Save the new person to the database
//    catch(err){
//     console.log(err)
//     res.status(500).json({error:"internal server error"})

//    }


  
// });




// get method to get the person

// app.get("/person", async(req,res)=>{

//   try{
//     const data = await Person.find()
//     console.log("data  fetched")
//     res.status(200).json(data)
//   }
//   catch(error){
//     console.log(error)
//     res.status(500).json({error:"internal server erorr"})

//   }

// })

// app.post('/menu',async(req,res)=>{
//   try{
//     const data = req.body;
//     const newMenu =new MenuItems(data);
//     const response =await newMenu.save()
//     console.log("data saved")
//     res.status(200).json(response)
// }
//   catch(error){
//     console.log(error)
//     res.status(500).json({error:"internal server error"})

//   }

// })



// app.get('/menu',async(req,res)=>{

//   try{

//     const data = await MenuItems.find() 

//     console.log("data fetched");
//     res.status(200).json(data)

//   }
//   catch(error){
//     console.log(error)
//     res.status(500).json({error:"internal server error"})
//   }

// })


// app.get("/person/:workType",async(req,res)=>{
//   try{
//     const workType =req.params.workType //extarct the work type  from the url  parameter
//      if(workType=="chef"|| workType== "manager"|| workType=="waiter"){
//       const response = await Person.find({work:workType})
//       console.log("response fetched")
//       res.status(200).json(response)


//      }
//      else{
//       res.status(404).json({error:"invalid work type"})

//      }

//   }
//   catch(error){
//     console.log(error)
//     res.status(500).json({error:"internal server error"})

//   }

// })
// import the router file
const personRoutes = require('./routes/personRoutes')
const menuItemRoutes = require('./routes/menuItemRoutes')
// use the router
app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes)


app.listen(3000,()=>{
  console.log("server is running")
})














