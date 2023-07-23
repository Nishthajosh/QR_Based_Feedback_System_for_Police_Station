const express= require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
app.use(express.json());

require('dotenv').config();

app.use(cors());
const port=7000;
const PORT = process.env.PORT || 7000;


mongoose.connect('mongodb+srv://nishthajoshi:nkvlgtp945@cluster0.pbfplqj.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Mongodb connected"))
.catch((err)=>console.log("Error"+err))

const login=require('./routers/login.route');
const signup=require('./routers/signup.route');
const feedback=require('./routers/feedback.route');

app.use('/login',login);
app.use('/signup',signup);
app.use('/feedback',feedback);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})