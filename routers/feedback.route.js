const router=require('express').Router();
const feedback=require('../models/feedback');

router.route('/').get((req,res)=>{
    feedback.find()
    .then((data)=>res.json(data))
    .catch((err)=>res.json("ERROR"+err))
})

router.route('/add').post((req,res)=>{
    const reference=req.body.reference;
    const time=req.body.time;
    const exprience=req.body.exprience;

    try{
        const newuser= new feedback({
            reference,
            time,
            exprience
        })
        newuser.save()
        .then(()=>{
          res.send({status:"ok"});
        })
        .catch((err)=>res.send("there is an save error"+err))
      }
      catch(err){
        res.send({status:"error"})
      }
    // try{
    //     const newuser= new feedback({
    //         reference,
    //         time,
    //         exprience,
    //     })
        
    //     newuser.save()
    //     .then(()=> res.send({status:"ok"})
    //     .catch((err)=>res.send({status:"Error"+err})) 
    
    // }
       
    // catch(err){
    //     res.send({status:"ERROR"+err})
    // }
   
})

module.exports=router;