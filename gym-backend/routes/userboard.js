const express=require("express")
const router=express.Router()
const UserModal = require("../Modals/user-modal")
const YogaModal = require("../Modals/dashboard-modal");
const jwt = require("jsonwebtoken");
const joiner =0
router.post("/book-slot",(req,res)=>{
    try {
        const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY );
        UserModal.find({userName :user}).then((data)=>{
            if(data.length){
                YogaModal.create({
                    joiner: req.body.joiner,
                    trainer: req.body.trainer,
                    exercise: req.body.exercise,
                    join: joiner
                }).then(()=>{
                    res.status(200).send("Booked slot Successfully")

                })
            } else{
                res.status.apply(400).send('Uauthorize user')
            }
        }).catch((err)=>{
            res.status(400).send(err);
        })

    } catch(err) {
        res.status(400).send("Unauthorize user")
    }    

})

router.get("/userdata", (req,res)=>{
    YogaModal.find().then((data)=>{
    res.status(200).send(data);
    console.log(data);
}).catch((err)=>{
    res.status(400).send(err);
    console.log(err);
})
});
module.exports=router