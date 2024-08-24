const mongoose = require('mongoose');
// define the connmection url
const mongoURL = 'mongodb://localhost:27017/hotels'
// hotels is a  database name
mongoose.connect(mongoURL,{useNewUrlParser:true,
    useUnifiedTopology:true

})
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
