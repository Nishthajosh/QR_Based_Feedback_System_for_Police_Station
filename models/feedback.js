const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const feedback=new Schema({
    reference:String,
    time:Number,
    exprience:String
})

const Userfeedback=mongoose.model('Userfeedback',feedback)
module.exports=Userfeedback;