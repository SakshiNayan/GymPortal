import React, { useState }from 'react'
import "./register.css"
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom'


const Register = () => {
//   const [termsandcondition,settermsandcondition]=useState("terms-false")
//   const [data,setdata]=useState({})
//   const [numberValidation,setnumberValidation]=useState("number-validity-true")
//   const [usererror,setUsererror]=useState("Userexist-false")
//   const [numbererror,setnumbererror]=useState("numberexist-false")

//   const navigate=useNavigate()
//   const handleRegister=(e)=>{
//     e.preventDefault()
//     if((data.Phone+"").length===10){
//   axios.post("http://localhost:3002/user/register",data)
//       .then(()=>{navigate("/")})
//     .catch((err)=>{
//     if(err.response.data==="UserExist"){
//         setUsererror("Userexist-true")
//   setTimeout(()=>{
//     setUsererror("Userexist-false")
//   },10000)

//     }
//     if(err.response.data==="PhoneExist"){
//       setnumbererror("numberexist-true")
//       setUsererror("Userexist-false")
//       setTimeout(()=>{
//         setnumbererror("numberexist-false")
//       },10000)
    
//   }
//   })
// }
// }
//   const handleFormData=(e,id)=>{
// setdata({...data,[id]:e.target.value})
// if(id==="Phone"){
//   let stringnum=data.Phone+""
//   if(stringnum.length!==9){
//     setnumberValidation("number-validity-false")
//   }else{
//     setnumberValidation("number-validity-true")
//   }
// }
//   }
//   const checkInputs=()=>{
//     let c=0
//     for(let key in data){
//     let value=data[key]
// if(value.length){
//   c++
// }
//     }
//     return c
//   }

//   const getbuttonClass=()=>{
//     if(termsandcondition==="terms-false"){
//       settermsandcondition("terms-true")
//       return 
//     }
//     settermsandcondition("terms-false")
//     return 
//   }
const [data, setData] = useState({Name:"", phone:"", address:"",age:"", userName: "", password: "", });
    const [show,setshow]=useState(false)
    const navigate = useNavigate();
    const handleData = (e) => {
        e.preventDefault();
        if(data.password){
            console.log(data);
             axios({
                url: "http://localhost:3002/user/register",
                method: "POST",
                headers: {
    
                },
                data: data
            }).then((res) => {
                console.log(res);
                navigate("/");
            }).catch((err) => {
                setshow(!show)
                setTimeout(()=>{
                    setshow(!setshow)
                },2000)
                console.log(err);
            })    
        }else{
            alert("Fill all the Details")
        }
        setData({Name:"", phone:"", address:"",age:"", userName:"", password:""})

    }
    const inputHandler = (e,id)=>{
        if(id === "userName"){
            setData({...data, userName:e.target.value})
        }else if(id === "password"){
            setData({...data, password:e.target.value})
        }else if(id === "Name"){
            setData({...data, Name:e.target.value})
        }
        else if(id === "phone"){
            setData({...data, phone:e.target.value})
        }
        else if(id === "address"){
            setData({...data, address:e.target.value})
        }
        else if(id === "age"){
            setData({...data, age:e.target.value})
        }
    }

  return (
    <>
      <img src="./images/cover1.jpg" alt=""  className='coverImgregis'/>
    <div id='Register-comp'>
      
       <div id='Heading-register'>
        register
      </div>
      <form onSubmit={(e) => handleData(e)}>
        <div className='grid'>
        <div className='grid-cell'>
        <label className="Label-register"  htmlFor="Name-register">Name</label>
      <input  type="text" required id="Name-register" onChange={(e) => inputHandler(e, "Name") } value={data.Name} />
      <div className='blue-line-register'></div>
      </div>
      <div className='grid-cell'>
      <label className="Label-register"  htmlFor="Email-register">UserName</label>
      <input  type="text" required id="Email-register" onChange={(e)=>inputHandler(e,"userName")} value={data.userName}/>
      {/* <p className={usererror}>UserName already exist</p> */}
      <div className='blue-line-register'></div>
      </div>
      <div className='grid-cell'>
      <label className="Label-register" htmlFor="Phone-register">Phone</label>
      <input  type="number" required id="Phone-register" onChange={(e)=>inputHandler(e,"phone")} value={data.phone}/>
      <div className='blue-line-register'></div>
      {/* <p className={numberValidation}>Please enter a valid number</p>
      <p className={numbererror}>Number already exist</p>*/}
      </div> 
      <div className='grid-cell'>
      <label className="Label-register" htmlFor="Password-register">Password</label>
      <input  type="password" required id="Password-register" onChange={(e)=>inputHandler(e,"password")} value={data.password}/>
      <div className='blue-line-register'></div>
      </div>
 
      <div className='grid-cell'>
      <label className="Label-register" htmlFor="Address-register">Address</label>
      <input  type="text" required id="Address-register" onChange={(e)=>inputHandler(e,"address")} value={data.address}/>
      <div className='blue-line-register'></div>
      </div>
      <div className='grid-cell'>
      <label className="Label-register" htmlFor="Pincode-register">Age</label>
      <input  type="text" required id="Pincode-register" onChange={(e)=>inputHandler(e,"age")} value={data.age}/>
      <div className='blue-line-register'></div>
      </div>
      {/* </div> */}
      
    </div>
    <div className='radio-b'>
        <input type="radio" value="trainer" name="gender" className='r1' /><b>Trainer</b>
        <input type="radio" value="joiner" name="gender" className='r1' /><b>Joiner</b>
       
      </div>
      
      {/* <input type="checkbox" id='checkbox-register' required onChange={()=>getbuttonClass()}/>
      <p id='Terms-register'>I agree to Terms & Condition receiving marketing and promotional materials</p>
      <button type='submit'  className='terms-true'>Register</button>
      <Link to="/"><button className={termsandcondition} onClick={checkInputs()!==8?null:(e)=>handleRegister(e)}>Register</button></Link> */}
      <button type='submit' id='buttonRegis'>Register</button>
      </form>
    </div>
    </>
  )
}

export default Register