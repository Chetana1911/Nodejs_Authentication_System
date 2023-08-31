const mongoose=require('mongoose');

// mongoose.connect('mongodb://127.0.0.1/Nodejs_Authentication');    #at the time of  run code on localhost
mongoose.connect(process.env.MONGODB_URI);//at the rendering time

const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to MongoDB'));

db.once('open',function(){
    console.log('connect to database :: MongoDB');

});

module.exports=db;


