const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/patholgybackend').then(() =>{
    console.log('mongodb connect succesfully')
}).catch(err=>{
    console.log("something went wrong");
})