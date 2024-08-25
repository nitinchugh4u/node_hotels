const mongoose = require('mongoose');
require('dotenv').config()

// define the connmection url

// LOCAL URL
// const mongoURL = 'mongodb://localhost:27017/hotels'

// const mongoURL = "mongodb+srv://nitinchugh4u:<Nitin@12345>@cluster0.ele4y.mongodb.net/"
// const mongoURL = "mongodb+srv://nitinchugh4u:Nitin@12345@cluster0.ele4y.mongodb.net/"
// pass word change to Nitin12345
// const mongoURL = "mongodb+srv://nitinchugh4u:Nitin12345@cluster0.ele4y.mongodb.net/";
// online url
// const mongoURL = "mongodb+srv://nitinchugh4u:Nitin%4012345@cluster0.ele4y.mongodb.net/myDatabase?retryWrites=true&w=majority";
// const mongoURL = process.env.MONGODB_URL_LOCAL;

const mongoURL = process.env.MONGODB_URL;


// hotels is a  database name
// mongoose.connect(mongoURL,{useNewUrlParser:true,
//     useUnifiedTopology:true

// })

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected to the mongo db server")
})
db.on('error',(err)=>{
    console.log("connected t o the mongo db server",err)
})
db.on('disconnected',()=>{
    console.log("disconnected to the mongo db server")
})

// export the  database connection

module.exports= db
