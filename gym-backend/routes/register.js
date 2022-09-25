const express=require("express")
const bcrypt=require("bcryptjs")
const router=express.Router()
const jwt=require("jsonwebtoken")

const UserModal = require("../Modals/user-modal")

const {checkExistingUser, generatePasswordHash} = require("../utility");



router.post('/register',async(req,res)=>{
    if(await checkExistingUser(req.body.userName)) {
        res.status(400).send("Username exist. Please try with different username");
    } else {
        generatePasswordHash(req.body.password).then((passwordHash)=> {
            UserModal.create({
                Name: req.body.Name,
                phone: req.body.phone,
                address : req.body.address,
                age : req.body.age,
                userName: req.body.userName,
                password: passwordHash,
                userType: req.body.userType

            })
            .then(()=> { 
                res.status(200).send(`${req.body.userName} added successfully`); 
            }).catch((err)=> {
                res.status(400).send(err.message)
            })

        });
    }
   
});

router.post('/login',(req,res)=>{
    UserModal.find({userName: req.body.userName}).then((userData)=> {
        if(userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                if(val) {
                    const AuthToken = jwt.sign(userData[0].userName, process.env.SECRET_KEY);
                    res.status(200).send({"Status": "Success",AuthToken,userName:userData[0].userName});
                } else {
                    res.status(400).send("Invalid Password");
                }
            })
        } else {
            res.status(400).send("Invalid user");
        }
    })
  
})
router.get("/userData",(req,res)=>{
    try {
      const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY );
      UserModal.find({userName : user}).then((data)=>{
         console.log(data)
        res.status(200).send({user: data});
      }).catch((err)=>{
        res.status(400).send(err);
      })
  } catch(err) {
      res.status(400).send("Unauthorize user", err)
  }  

  })

module.exports=router;